import decodeJwt from 'jwt-decode';
import { get } from 'lodash';

const BASE_URL = process.env.REACT_APP_REST_API_AUTHENTICATE_URL;

export const refreshTokenHandler = () => {
  var refreshTokenHandlerInterval = setInterval(function () {
    if (localStorage.getItem('refreshToken')) {
      if (checkExpiredTime()) {
        refreshTokenBase(BASE_URL);
      }
    } else {
      removeLoginInfo();
      clearInterval(refreshTokenHandlerInterval);
    }
  }, 1000);
};

const authProvider = {
  login: ({ username, password }) => {
    const request = new Request(BASE_URL + "/user/logins", {
      method: 'POST',
      body: JSON.stringify({ email: username, password }),
      headers: _prepareHeaders(),
    });
    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          return response.json()
            .then(result => {
              throw new Error(result.error)
            })
        }
        return response.json();
      })
      .then(response => {
        getLocalStorage(response)
        refreshTokenHandler()
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },
  logout: () => {
    removeLoginInfo();
    return Promise.resolve();
  },
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem('token');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () =>
    localStorage.getItem('token')
      ? Promise.resolve()
      : Promise.reject({ redirecTo: "/" }),
  getPermissions: () => {
    const roles = localStorage.getItem('permissions');
    return roles ? Promise.resolve(roles) : Promise.reject();
  }
};

function refreshTokenBase(BASE_URL) {
  const requestRefreshToken = new Request(BASE_URL + '/user/refreshTokens', {
    method: 'POST',
    body: JSON.stringify({ refreshToken: localStorage.getItem('refreshToken') }),
    headers: _prepareHeaders()
  })
  return fetch(requestRefreshToken)
    .then(response => {
      if ([500, 401, 400, '500', '401', '400'].indexOf(response.status) >= 0) {
        removeLoginInfo();
      } else {
        return response.json();
      }
    })
    .then(response => {
      return getLocalStorage(response);
    })
    .catch(err => {
      removeLoginInfo();
      return Promise.reject(err);
    })
};

function removeLoginInfo() {
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('expiresIn');
  localStorage.removeItem('expiresAt');
  localStorage.removeItem('userId');
  localStorage.removeItem('permissions');
  localStorage.removeItem('webConfigs');
};

function checkExpiredTime() {
  let timeFromGetLastToken = Math.floor(
    (Date.now() - localStorage.getItem('expiresAt')) / 1000
  );
  const callRefresh =
    localStorage.getItem('expiresIn') - timeFromGetLastToken < 30;
  return callRefresh;
};

function getLocalStorage(response) {
  const { token, refreshToken, expiresIn, webConfigs } = response;
  const decodedToken = decodeJwt(token);
  localStorage.setItem('token', token);
  localStorage.setItem('refreshToken', refreshToken);
  localStorage.setItem('expiresIn', expiresIn);
  localStorage.setItem('expiresAt', Date.now());
  localStorage.setItem('permissions', get(decodedToken, 'userLogin.permissions'));
  localStorage.setItem('userId', decodedToken.userLogin._id);
  localStorage.setItem('webConfigs', JSON.stringify(webConfigs));
};;

function _prepareHeaders() {
  return new Headers({
    "Content-Type": "application/json",
    "X-Access-Token": localStorage.getItem("token")
  });
};

export default authProvider;
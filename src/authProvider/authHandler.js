import decodeJwt from 'jwt-decode';
import { get } from 'lodash';

const BASE_URL = process.env.REACT_APP_REST_API_AUTHENTICATE_URL;

const login = (params) => {
  const username = get(params, 'username');
  const password = get(params, 'password')
  const request = new Request(BASE_URL + "/user/logins", {
    method: 'POST',
    body: JSON.stringify({ email: username, password }),
    headers: _prepareHeaders(),
  });
  return fetch(request)
    .then(response => {
      if (response.status >= 400) {
        return response.json()
          .then(result => {
            throw new Error(result.messageCode)
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
};

const refreshTokenHandler = () => {
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
  localStorage.removeItem('auth');
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
  const { token, refreshToken, expiresIn, webConfig, auth } = response;
  const decodedToken = decodeJwt(token);
  localStorage.setItem('token', token);
  localStorage.setItem('refreshToken', refreshToken);
  localStorage.setItem('expiresIn', expiresIn);
  localStorage.setItem('expiresAt', Date.now());
  localStorage.setItem('permissions', get(decodedToken, 'userLogin.permissions'));
  localStorage.setItem('userId', decodedToken.userLogin._id);
  localStorage.setItem('config', JSON.stringify(webConfig));
  localStorage.setItem('auth',  JSON.stringify(auth));
};

function _prepareHeaders() {
  return new Headers({
    "Content-Type": "application/json",
    "X-Access-Token": localStorage.getItem("token")
  });
};

export {
  login,
  removeLoginInfo,
  refreshTokenHandler
}
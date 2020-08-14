import decodeJwt from 'jwt-decode';
import { get } from 'lodash';

// const BASE_URL = process.env.REACT_APP_REST_API_AUTHENTICATE_URL;

const authProvider = {
  login: ({ username, password }) => {
    const request = new Request("/user/logins", {
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
      .then(({ token, webConfigs }) => {
        const decodedToken = decodeJwt(token);
        localStorage.setItem('token', token);
        localStorage.setItem('permissions', get(decodedToken, 'userLogin.permissions'));
        // localStorage.setItem("roles", JSON.stringify(decodedToken.userLogin.adminApp.roles));
        // localStorage.setItem('userId', decodedToken.userLogin._id);
        // localStorage.setItem('resetToken', decodedToken.userLogin.adminApp.resetPassword);
        localStorage.setItem('webConfigs', JSON.stringify(webConfigs));
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('permissions');
    localStorage.removeItem('resetToken');
    localStorage.removeItem('webConfigs');
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

function _prepareHeaders() {
  return new Headers({
    "Content-Type": "application/json",
    "X-Access-Token": localStorage.getItem("token")
  });
}

export default authProvider;
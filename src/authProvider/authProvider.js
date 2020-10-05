import { login, removeLoginInfo } from './authHandler';

const authProvider = {
  login: (params) => login(params),
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

export default authProvider;
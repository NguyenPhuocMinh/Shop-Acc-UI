import { fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const REST_API = process.env.REACT_APP_REST_API_URL;

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  options.headers.set('X-Access-Token', localStorage.getItem('token'));
  return fetchUtils.fetchJson(url, options);
};

const restProvider = jsonServerProvider(REST_API, httpClient);

const delayedDataProvider = new Proxy(restProvider, {
  get: (target, name, self) =>
    name === 'then' // as we await for the dataProvider, JS calls then on it. We must trap that call or else the dataProvider will be called with the then method
      ? self
      : (resource, params) =>
        new Promise(resolve =>
          setTimeout(
            () => resolve(restProvider[name](resource, params)),
            500
          )
        ),
});

export default delayedDataProvider;
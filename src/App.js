import React, { useState, useEffect } from 'react';
import { Admin, Resource } from 'react-admin';
import dataProviderFactory from "./dataProvider";
import authProvider from './authProvider/authProvider';
import i18nProvider from './i18n/i18nProvider';
import { refreshTokenHandler } from './authProvider/authHandler';
import Dashboard from './layout/DashBoard';
import NotFound from './layout/NotFound';
import customRoutes from './routes';
import Layout from './layout/Layout'
import Login from './layout/Login';

// reducers
import themeReducers from './store/reducers/themeReducer';
// end reducers

// resources
import users from './components/users';
import products from './components/products';
import productTypes from './components/productTypes';
// end resources

const App = () => {
  const [dataProvider, setDataProvider] = useState(null);
  useEffect(() => {
    refreshTokenHandler();
    const fetchDataProvider = async () => {
      const dataProviderInstance = await dataProviderFactory(
        process.env.REACT_APP_DATA_PROVIDER || ''
      );
      setDataProvider(() => dataProviderInstance);
    }
    fetchDataProvider();
  }, [])

  if (!dataProvider) {
    return (
      <div className="loader-container">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  return (
    <Admin
      title="Shop Acc Admin"
      dataProvider={dataProvider}
      authProvider={authProvider}
      i18nProvider={i18nProvider}
      dashboard={Dashboard}
      customRoutes={customRoutes}
      customReducers={{ theme: themeReducers }}
      layout={Layout}
      loginPage={Login}
      catchAll={NotFound}
    >
      {permissions => [
        <Resource
          key="Users"
          name="users"
          {...users}
        />,
        <Resource
          key="Products"
          name="products"
          {...products}
        />,
        <Resource
          key="ProductTypes"
          name="productTypes"
          {...productTypes}
        />,
      ]}
    </Admin>
  )
}
export default App;

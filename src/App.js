import React, { useState, useEffect } from 'react';
import { Admin, Resource } from 'react-admin';
import dataProviderFactory from "./dataProvider";
import authProvider from './authProvider/authProvider';
import i18nProvider from './i18n/i18nProvider';
import { refreshTokenHandler } from './authProvider/authProvider';
import Dashboard from './layout/DashBoard';
import NotFound from './layout/NotFound';
import customRoutes from './routes';
import Layout from './layout/Layout'
import accounts from './components/account';
import ThemeReducers from './components/settings/ThemeReducers';

const App = () => {
  const [dataProvider, setDataProvider] = useState(null);
  useEffect(() => {
    refreshTokenHandler();
    const fetchDataProvider = async () => {
      const dataProviderInstance = await dataProviderFactory(
        process.env.REACT_APP_DATA_PROVIDER || ''
      );
      setDataProvider(
        // GOTCHA: dataProviderInstance can be a function
        () => dataProviderInstance
      );
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
      customReducers={{ theme: ThemeReducers }}
      layout={Layout}
      catchAll={NotFound}
    >
      {permissions => [
        <Resource key="Accounts" name="accounts"  {...accounts} />,
      ]}
    </Admin>
  )
}
export default App;

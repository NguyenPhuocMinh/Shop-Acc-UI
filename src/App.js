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
import smells from './components/smells';
import gifts from './components/gifts';
// end resources

// icons
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// end icons

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
          options={{
            parent: {
              isParent: true,
              menuParent: 'showUsers',
              label: 'pos.menu.users',
              icon: <AccountCircleIcon />,
              roles: ['ADMIN']
            },
            children: {
              menuParent: 'users',
              label: 'resources.users.name',
              icon: <ChevronRightIcon />,
              roles: ['ADMIN']
            },
          }}
        />,
        <Resource
          key="Products"
          name="products"
          {...products}
          options={{
            parent: {
              isParent: true,
              menuParent: 'showProducts',
              label: 'pos.menu.products',
              icon: <CollectionsBookmarkIcon />,
              roles: ['ADMIN', 'OPERATOR']
            },
            children: {
              menuParent: 'products',
              label: 'resources.products.name',
              icon: <ChevronRightIcon />,
              roles: ['ADMIN', 'OPERATOR']
            },
          }}
        />,
        <Resource
          key="ProductTypes"
          name="productTypes"
          {...productTypes}
          options={{
            children: {
              menuParent: 'products',
              label: 'resources.productTypes.name',
              icon: <ChevronRightIcon />,
              roles: ['ADMIN', 'OPERATOR']
            }
          }}
        />,
        <Resource
          key="Smells"
          name="smells"
          {...smells}
          options={{
            children: {
              menuParent: 'products',
              label: 'resources.smells.name',
              icon: <ChevronRightIcon />,
              roles: ['ADMIN', 'OPERATOR']
            }
          }}
        />,
        <Resource
          key="Gifts"
          name="gifts"
          {...gifts}
          options={{
            children: {
              menuParent: 'products',
              label: 'resources.gifts.name',
              icon: <ChevronRightIcon />,
              roles: ['ADMIN', 'OPERATOR']
            }
          }}
        />,
        <Resource
          key="Cards"
          name="cards"
          {...gifts}
          options={{
            // parent: {
            //   isParent: true,
            //   menuParent: 'showCards',
            //   label: 'pos.menu.cards',
            //   icon: <AccountCircleIcon />,
            //   roles: ['ADMIN']
            // },
            // children: {
            //   isParent: true,
            //   menuParent: 'cards',
            //   label: 'cards',
            //   icon: <ChevronRightIcon />,
            //   roles: ['ADMIN']
            // },
            // node: {
            //   menuParent: 'cards',
            //   label: 'aaaa',
            //   icon: <ChevronRightIcon />,
            //   roles: ['ADMIN']
            // }
            orphan: {
              isOrphan: true,
              label: 'cards',
              icon: <CollectionsBookmarkIcon />,
              roles: ['ADMIN', 'OPERATOR', 'USER']
            }
          }}
        />,
      ]}
    </Admin>
  )
}
export default App;

import * as React from 'react';
import { Layout, Sidebar } from 'react-admin';
import AppBar from './AppBar';
import Menu from './Menu';

const CustomSidebar = props => <Sidebar {...props} size={200} />;

const CustomLayout = props => {
  return (
    <Layout
      {...props}
      appBar={AppBar}
      sidebar={CustomSidebar}
      menu={Menu}
      // theme={theme}
    />
  );
}

export default CustomLayout

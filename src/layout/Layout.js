import * as React from 'react';
import { Layout, Sidebar } from 'react-admin';
import { useSelector } from 'react-redux';
import AppBar from './AppBar';
import Menu from './Menu';
import { lightTheme, darkTheme } from './Themes';
import MyNotification from './Notification';

const CustomSidebar = props => <Sidebar {...props} size={200} />;

const CustomLayout = props => {
  const theme = useSelector((state) =>
    state.theme === 'dark' ? darkTheme : lightTheme
  );
  return (
    <Layout
      {...props}
      appBar={AppBar}
      sidebar={CustomSidebar}
      menu={Menu}
      theme={theme}
      notification={MyNotification}
    />
  );
}

export default CustomLayout

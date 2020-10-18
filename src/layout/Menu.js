import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  DashboardMenuItem,
  MenuItemLink,
  usePermissions,
  useTranslate
} from 'react-admin';
import SubMenu from './SubMenu';
import { useMediaQuery } from '@material-ui/core';
// icon
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
// end icon

const Menu = props => {
  const { onMenuClick, dense, logout } = props;
  const translate = useTranslate();
  const permissions = usePermissions().permissions;
  const isXSmall = useMediaQuery(theme => theme.breakpoints.down('xs'));
  const [state, setState] = useState({
    menuUsers: false,
    menuProducts: false,
    menuCustomers: false,
  });
  const open = useSelector((state) => state.admin.ui.sidebarOpen);
  useSelector((state) => state.theme); // force rerender on theme change

  const handleToggle = (menu) => {
    setState(state => ({ ...state, [menu]: !state[menu] }));
  };

  return (
    <div>
      {' '}
      <DashboardMenuItem onClick={onMenuClick} sidebarIsOpen={open} />
      <div>
        {permissions && permissions.includes('ADMIN') ?
          <SubMenu
            handleToggle={() => handleToggle('menuUsers')}
            isOpen={state.menuUsers}
            sidebarIsOpen={open}
            name="pos.menu.users"
            icon={<AccountCircleIcon />}
            dense={dense}
          >
            <MenuItemLink
              to={`/users`}
              primaryText={translate('resources.users.name')}
              leftIcon={<ChevronRightIcon />}
              onClick={onMenuClick}
              sidebarIsOpen={open}
            />
          </SubMenu> : null
        }
        {permissions && permissions.includes('OPERATOR') ?
          <SubMenu
            handleToggle={() => handleToggle('menuProducts')}
            isOpen={state.menuProducts}
            sidebarIsOpen={open}
            name="pos.menu.products"
            icon={<CollectionsBookmarkIcon />}
            dense={dense}
          >
            <MenuItemLink
              to={`/products`}
              primaryText={translate('resources.products.name')}
              leftIcon={<ChevronRightIcon />}
              onClick={onMenuClick}
              sidebarIsOpen={open}
            />
            <MenuItemLink
              to={`/productTypes`}
              primaryText={translate('resources.productTypes.name')}
              leftIcon={<ChevronRightIcon />}
              onClick={onMenuClick}
              sidebarIsOpen={open}
            />
            <MenuItemLink
              to={`/smells`}
              primaryText={translate('resources.smells.name')}
              leftIcon={<ChevronRightIcon />}
              onClick={onMenuClick}
              sidebarIsOpen={open}
            />
            <MenuItemLink
              to={`/gifts`}
              primaryText={translate('resources.gifts.name')}
              leftIcon={<ChevronRightIcon />}
              onClick={onMenuClick}
              sidebarIsOpen={open}
            />
          </SubMenu> : null
        }
        {isXSmall && logout}
      </div>
    </div>
  );
};

export default Menu;

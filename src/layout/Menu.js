import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  useTranslate,
  DashboardMenuItem,
  MenuItemLink,
  WithPermissions
} from 'react-admin';
import SubMenu from './SubMenu';

import accounts from '../components/account';
import { checkPermission, adminRoles } from '../authProvider/checkPermissions';

const Menu = props => {
  const { onMenuClick, dense } = props;
  const [state, setState] = useState({
    menuSales: false,
    menuCustomers: false,
  });
  const translate = useTranslate();
  const open = useSelector((state) => state.admin.ui.sidebarOpen);
  useSelector((state) => state.theme); // force rerender on theme change

  const handleToggle = (menu) => {
    setState(state => ({ ...state, [menu]: !state[menu] }));
  };

  return (
    <div>
      {' '}
      <DashboardMenuItem onClick={onMenuClick} sidebarIsOpen={open} />
      <WithPermissions
        render={({ permissions }) =>
          permissions && checkPermission(permissions, adminRoles) ? (
            <SubMenu
              handleToggle={() => handleToggle('menuSales')}
              isOpen={state.menuSales}
              sidebarIsOpen={open}
              name="pos.menu.sales"
              icon={<accounts.icon />}
              dense={dense}
            >
              <MenuItemLink
                to={`/accounts`}
                primaryText={translate(`resources.accounts.name`, {
                  smart_count: 2,
                })}
                leftIcon={<accounts.icon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
              />
            </SubMenu>
          ) : null
        }
      />
    </div>
  );
};

export default Menu;

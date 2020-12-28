import React, { useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import {
  DashboardMenuItem,
  MenuItemLink,
  usePermissions,
  useTranslate,
  getResources,
} from 'react-admin';
import SubMenu from './SubMenu';
import { useMediaQuery, Box } from '@material-ui/core';
import verifyRoles from './VerifyRoles';
import {
  isParent,
  isMenuParent,
  isParentIcon,
  isParentOfNode,
  isParentOfNodeIcon,
  isChildOfParent,
  isNodeOfChild,
  isOrphan
} from './Utils';
// icon
import LabelIcon from '@material-ui/icons/Label';
import DefaultIcon from '@material-ui/icons/ViewList';
// end icon


const Menu = props => {
  const { hasDashboard, onMenuClick, dense = false, logout } = props;

  const { permissions } = usePermissions();
  const translate = useTranslate();

  useSelector((state) => state.theme);

  const [state, setState] = useState({});

  const open = useSelector((state) => state.admin.ui.sidebarOpen);
  const resources = useSelector(getResources, shallowEqual);

  const handleToggle = (menu) => {
    setState(state => ({ ...state, [menu]: !state[menu] }));
  };

  const isXSmall = useMediaQuery(theme => theme.breakpoints.down('xs'));

  const MenuItem = (resource, type) => {
    return (
      <MenuItemLink
        key={resource.name}
        to={`/${resource.name}`}
        primaryText={translate(
          type === 'children' ? resource.options.children.label :
            type === 'node' ? resource.options.node.label :
              type === 'orphan' ? resource.options.orphan.label :
                resource.name
        )}
        leftIcon={
          type === 'children' ? resource.options.children.icon :
            type === 'node' ? resource.options.node.icon :
              type === 'orphan' ? resource.options.orphan.icon :
                <DefaultIcon />
        }
        onClick={onMenuClick}
        dense={dense}
        sidebarIsOpen={open}
      />
    )
  }

  return (
    // <Box mt={1}>
    //   {' '}
    //   <DashboardMenuItem onClick={onMenuClick} sidebarIsOpen={open} />
    //   {permissions && verifyRoles(permissions, ['ADMIN']) ?
    //     <SubMenu
    //       handleToggle={() => handleToggle('menuUsers')}
    //       isOpen={state.menuUsers}
    //       sidebarIsOpen={open}
    //       name="pos.menu.users"
    //       icon={<AccountCircleIcon />}
    //       dense={dense}
    //     >
    //       <MenuItemLink
    //         to={`/users`}
    //         primaryText={translate('resources.users.name')}
    //         leftIcon={<ChevronRightIcon />}
    //         onClick={onMenuClick}
    //         sidebarIsOpen={open}
    //       />
    //     </SubMenu> : null
    //   }
    //   {permissions && verifyRoles(permissions, ['OPERATOR']) ?
    //     <SubMenu
    //       handleToggle={() => handleToggle('menuProducts')}
    //       isOpen={state.menuProducts}
    //       sidebarIsOpen={open}
    //       name="pos.menu.products"
    //       icon={<CollectionsBookmarkIcon />}
    //       dense={dense}
    //     >
    //       <MenuItemLink
    //         to={`/products`}
    //         primaryText={translate('resources.products.name')}
    //         leftIcon={<ChevronRightIcon />}
    //         onClick={onMenuClick}
    //         sidebarIsOpen={open}
    //       />
    //       <MenuItemLink
    //         to={`/productTypes`}
    //         primaryText={translate('resources.productTypes.name')}
    //         leftIcon={<ChevronRightIcon />}
    //         onClick={onMenuClick}
    //         sidebarIsOpen={open}
    //       />
    //       <MenuItemLink
    //         to={`/smells`}
    //         primaryText={translate('resources.smells.name')}
    //         leftIcon={<ChevronRightIcon />}
    //         onClick={onMenuClick}
    //         sidebarIsOpen={open}
    //       />
    //       <MenuItemLink
    //         to={`/gifts`}
    //         primaryText={translate('resources.gifts.name')}
    //         leftIcon={<ChevronRightIcon />}
    //         onClick={onMenuClick}
    //         sidebarIsOpen={open}
    //       />
    //     </SubMenu> : null
    //   }
    //   {isXSmall && logout}
    // </Box>

    <Box mt={1}>
      {hasDashboard && (
        <DashboardMenuItem
          onClick={onMenuClick}
          dense={dense}
          sidebarIsOpen={open}
        />
      )}
      {resources.map((parentResource, index) => {
        if (isParent(parentResource)) {
          return permissions && verifyRoles(permissions, parentResource.options.parent.roles) ? (
            <SubMenu
              key={index}
              handleToggle={() => handleToggle(isMenuParent(parentResource) && parentResource.options.parent.menuParent)}
              isOpen={state[isMenuParent(parentResource) && parentResource.options.parent.menuParent]}
              sidebarIsOpen={open}
              dense={dense}
              name={parentResource.options.parent.label}
              icon={
                isParentIcon(parentResource) ?
                  parentResource.options.parent.icon : <LabelIcon />
              }
            >
              {resources.filter(resource => isChildOfParent(resource, parentResource))
                .map((childrenResource, indexElement) => {
                  if (isParentOfNode(childrenResource)) {
                    return permissions && verifyRoles(permissions, childrenResource.options.children.roles) ? (
                      <SubMenu
                        key={indexElement}
                        handleToggle={() => handleToggle(childrenResource.name)}
                        isOpen={state[childrenResource.name]}
                        sidebarIsOpen={open}
                        dense={dense}
                        name={childrenResource.options.children.label}
                        icon={isParentOfNodeIcon(childrenResource) ?
                          childrenResource.options.children.icon : <LabelIcon />
                        }
                      >
                        {resources.filter(resource => isNodeOfChild(resource, childrenResource))
                          .map(nodeResource => permissions &&
                            verifyRoles(permissions, nodeResource.options.node.roles) &&
                            MenuItem(nodeResource, 'node')
                          )
                        }
                      </SubMenu>
                    ) : null
                  } else {
                    return permissions &&
                      verifyRoles(permissions, childrenResource.options.children.roles) &&
                      MenuItem(childrenResource, 'children')
                  }
                })}
            </SubMenu>
          ) : null
        }
        if (isOrphan(parentResource)) {
          return permissions &&
            verifyRoles(permissions, parentResource.options.orphan.roles) &&
            MenuItem(parentResource, 'orphan')
        }
      })}
      {isXSmall && logout}
    </Box>
  );
};

export default Menu;

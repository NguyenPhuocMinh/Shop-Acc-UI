/*
*  check isParent, isChildren, isNode
*/

const isParent = (parentResource) => (
  parentResource.options &&
  parentResource.options.parent &&
  parentResource.options.parent.hasOwnProperty('isParent') &&
  parentResource.options.parent.isParent
);

const isMenuParent = (parentResource) => (
  parentResource.options &&
  parentResource.options.parent &&
  parentResource.options.parent.hasOwnProperty('menuParent')
);

const isParentIcon = (parentResource) => (
  parentResource.options &&
  parentResource.options.parent &&
  parentResource.options.parent.icon
)

const isParentOfNode = (childrenResource) => (
  childrenResource.options &&
  childrenResource.options.children &&
  childrenResource.options.children.hasOwnProperty('isParent') &&
  childrenResource.options.children.isParent
);

const isParentOfNodeIcon = (childrenResource) => (
  childrenResource.options &&
  childrenResource.options.children &&
  childrenResource.options.children.icon
)

const isChildOfParent = (resource, parentResource) => (
  resource.options &&
  resource.options.children &&
  resource.options.children.hasOwnProperty('menuParent') &&
  resource.options.children.menuParent === parentResource.name
);

const isNodeOfChild = (resource, childrenResource) => (
  resource.options &&
  resource.options.node &&
  resource.options.node.hasOwnProperty('menuParent') &&
  resource.options.node.menuParent === childrenResource.name
);

const isOrphan = (resource) => (
  resource.options &&
  resource.options.orphan &&
  resource.options.orphan.hasOwnProperty('isOrphan') &&
  resource.options.orphan.isOrphan
);

export {
  isParent,
  isMenuParent,
  isParentIcon,
  isParentOfNode,
  isParentOfNodeIcon,
  isChildOfParent,
  isNodeOfChild,
  isOrphan
}
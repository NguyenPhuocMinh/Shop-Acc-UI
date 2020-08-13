const checkPermission = (permissions, roles = []) => {
  const checkArray = roles.map(role => {
    return permissions.includes(role);
  })
  return checkArray.includes(true);
};

const adminRoles = ['ADMIN', 'OPERATOR', 'USER'];

export {
  checkPermission,
  adminRoles,
} 
const checkPermission = (permissions, roles = []) => {
  const checkRoles = roles.map(role => {
    return permissions.includes(role);
  })
  return checkRoles.includes(true);
};

const adminRoles = ['ADMIN', 'OPERATOR', 'USER'];

export {
  checkPermission,
  adminRoles,
} 
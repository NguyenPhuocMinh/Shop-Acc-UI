import { map, includes } from 'lodash';

const verifyRoles = (permissions, roles = []) => {
  const isRoles = map(roles, role => includes(permissions, role))
  return includes(isRoles, true);
}

export default verifyRoles;
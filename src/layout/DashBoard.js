import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { translate } from 'react-admin';
import { checkPermission, adminRoles } from '../authProvider/checkPermissions';

const DashBoard = props => {
  const { translate, permissions } = props;
  return permissions && checkPermission(permissions, adminRoles) ? (
    <Card>
      <CardHeader title={translate("pos.dashboard.welcome.title")} />
      <CardContent>{translate("pos.dashboard.welcome.content")}</CardContent>
    </Card>
  ) : null
};

export default translate(DashBoard);

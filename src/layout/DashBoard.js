import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { translate, usePermissions } from 'react-admin';

const DashBoard = props => {
  const { translate } = props;
  const permissions = usePermissions().permissions;
  return permissions ? (
    <Card>
      <CardHeader title={translate("pos.dashboard.welcome.title")} />
      <CardContent>{translate("pos.dashboard.welcome.content")}</CardContent>
    </Card>
  ) : null
};

export default translate(DashBoard);

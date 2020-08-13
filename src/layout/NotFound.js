import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title, translate } from 'react-admin';

const NotFound = props => {
  const { translate } = props;
  return (
    <Card>
      <Title title="pos.notFound.title" />
      <CardContent>
        <h1>404: {translate('pos.notFound.title')}</h1>
      </CardContent>
    </Card>
  )
};

export default translate(NotFound);
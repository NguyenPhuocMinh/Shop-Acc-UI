import React from 'react';
import { useTranslate } from 'react-admin';
import { withStyles, Button } from '@material-ui/core';
import styles from '../styles';
import Product from '../../account';
import { Link } from 'react-router-dom';
import { stringify } from 'querystring';

const LinkToRelatedProducts = ({ classes, record }) => {
  const translate = useTranslate();
  return record ? (
    <Button
      size="small"
      color="primary"
      component={Link}
      to={{
        pathname: '/products',
        search: stringify({
          page: 1,
          perPage: 25,
          sort: 'id',
          order: 'DESC',
          filter: JSON.stringify({ categoryId: record.id }),
        }),
      }}
      className={classes.link}
    >
      <Product.icon className={classes.icon} />
      {translate('resources.categories.linked.products')}
    </Button>
  ) : null
};

export default withStyles(styles)(LinkToRelatedProducts);
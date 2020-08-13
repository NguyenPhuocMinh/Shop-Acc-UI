import React from 'react';
import { List } from 'react-admin';
import CategoryGird from './CategoryGird';

const CategoryList = props => {
  return (
    <List
      {...props}
      exporter={false}
      sort={{ field: 'name', order: 'ASC' }}
      perPage={20}
      component="div"
    >
      <CategoryGird />
    </List>
  )
};

export default CategoryList;
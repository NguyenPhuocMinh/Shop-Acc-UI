import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  BooleanField
} from 'react-admin';

const ProductTypeList = props => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="name" />
        <BooleanField source="activated" />
      </Datagrid>
    </List>
  )
};

export default ProductTypeList;
import React from 'react';
import {
  Datagrid,
  EditButton,
  List,
  Filter,
  SearchInput,
  TextField,
  BooleanField,
  ReferenceField
} from 'react-admin';

const ConfigFormFilter = (props) => (
  <Filter {...props} >
    <SearchInput source="q" alwaysOn />
  </Filter>
);

const ProductList = props => (
  <List
    {...props}
    exporter={false}
    filters={<ConfigFormFilter />}
  >
    <Datagrid {...props}>
      <TextField source="name" />
      <ReferenceField
        source="productType"
        reference="productTypes"
      >
        <TextField source="name" />
      </ReferenceField>
      <TextField source="quantity" />
      <BooleanField source="status" />
      <EditButton />
    </Datagrid>
  </List>
);

export default ProductList;

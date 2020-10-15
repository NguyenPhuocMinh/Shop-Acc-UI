
import React from 'react';
import {
  Datagrid,
  EditButton,
  List,
  DateField,
  Filter,
  SearchInput
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
      <DateField
        source="createdAt"
        locales="vi-VN" showTime={true}
      />
      <EditButton />
    </Datagrid>
  </List>
);

export default ProductList;

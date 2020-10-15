import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  EditButton,
  Filter,
  BooleanInput,
} from 'react-admin';
import { SearchInput } from '../../customize/InputCustom';

const ListFilter = props => {
  return (
    <Filter {...props}>
      <SearchInput source="q" alwaysOn />
      <BooleanInput source="activated" />
    </Filter>
  )
};

const ProductTypeList = props => {
  return (
    <List
      {...props}
      exporter={false}
      filters={<ListFilter />}
    >
      <Datagrid>
        <TextField source="name" />
        <BooleanField source="activated" />
        <EditButton />
      </Datagrid>
    </List>
  )
};

export default ProductTypeList;
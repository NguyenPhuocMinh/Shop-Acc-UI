import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Filter,
  SearchInput,
  BooleanField
} from 'react-admin';

const ListFilter = props => {
  return (
    <Filter {...props}>
      <SearchInput source="q" alwaysOn />
    </Filter>
  )
};

const SmellList = props => {
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

export default SmellList;
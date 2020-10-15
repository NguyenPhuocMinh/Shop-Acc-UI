import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  Filter
} from 'react-admin';
import { SearchInput } from '../../customize/InputCustom';
import { get } from 'lodash';

const EditButtonCustom = props => {
  const id = get(props, 'record.id');
  const userId = localStorage.getItem('userId');
  if (id !== userId) {
    return <EditButton {...props} />
  }
  return null
};

const ListFilter = props => {
  return (
    <Filter {...props}>
      <SearchInput source="q" alwaysOn />
    </Filter>
  )
}

const ListUser = props => {
  return (
    <List
      {...props}
      exporter={false}
      filters={<ListFilter />}
    >
      <Datagrid>
        <TextField source="name" />
        <EmailField source="email" />
        <EditButtonCustom />
      </Datagrid>
    </List>
  )
};

export default ListUser;
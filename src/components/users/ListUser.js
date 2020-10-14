import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton
} from 'react-admin';
import { get } from 'lodash';

const EditButtonCustom = props => {
  const id = get(props, 'record.id');
  const userId = localStorage.getItem('userId');
  if (id !== userId) {
    return <EditButton {...props} />
  }
  return null
}

const ListUser = props => {
  return (
    <List
      {...props}
      exporter={false}
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
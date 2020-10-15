import React from 'react';
import {
  Create,
  SimpleForm,
  BooleanInput,
} from 'react-admin';
import { TextInput } from '../../customize/InputCustom';

const ProductTypeCreate = props => {
  return (
    <Create {...props}>
      <SimpleForm redirect="list">
        <TextInput source="name" autoComplete="off" />
        <BooleanInput source="activated" />
      </SimpleForm>
    </Create>
  )
};

export default ProductTypeCreate;
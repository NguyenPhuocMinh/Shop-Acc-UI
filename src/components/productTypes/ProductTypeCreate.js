import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  BooleanInput
} from 'react-admin';

const ProductTypeCreate = props => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" autoComplete="off"/>
        <BooleanInput source="activated" />
      </SimpleForm>
    </Create>
  )
};

export default ProductTypeCreate;
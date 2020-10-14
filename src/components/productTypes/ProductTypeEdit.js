import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput
} from 'react-admin';

const ProductTypeEdit = props => {
  return (
    <Edit {...props}>
      <SimpleForm redirect="list" undoable={false}>
        <TextInput source="name" />
        <BooleanInput source="activated" />
      </SimpleForm>
    </Edit>
  )
};

export default ProductTypeEdit;
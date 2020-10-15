import React from 'react';
import {
  Edit,
  SimpleForm,
  BooleanInput,
  Toolbar,
  SaveButton
} from 'react-admin';
import { TextInput } from '../../customize/InputCustom';

const EditToolbar = props => {
  return (
    <Toolbar {...props}>
      <SaveButton />
    </Toolbar>
  )
}

const ProductTypeEdit = props => {
  return (
    <Edit {...props}>
      <SimpleForm
        toolbar={<EditToolbar />}
        redirect="list"
        undoable={false}
      >
        <TextInput source="name" />
        <BooleanInput source="activated" />
      </SimpleForm>
    </Edit>
  )
};

export default ProductTypeEdit;
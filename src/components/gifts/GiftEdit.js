import React from 'react';
import {
  Edit,
  SimpleForm,
  Toolbar,
  SaveButton,
  BooleanInput,
  TextInput,
  required
} from 'react-admin';

const validateName = [required()]

const EditToolbar = props => {
  return (
    <Toolbar {...props}>
      <SaveButton />
    </Toolbar>
  )
}

const GiftEdit = props => {
  return (
    <Edit {...props}>
      <SimpleForm
        toolbar={<EditToolbar />}
        redirect="list"
        undoable={false}
      >
        <TextInput source="name" validate={validateName} />
        <BooleanInput source="activated" />
      </SimpleForm>
    </Edit>
  )
};

export default GiftEdit;
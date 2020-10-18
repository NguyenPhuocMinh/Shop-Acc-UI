import React from 'react';
import {
  Create,
  SimpleForm,
  BooleanInput,
  required,
  TextInput
} from 'react-admin';

const validateName = [required()]

const GiftCreate = props => {
  return (
    <Create {...props}>
      <SimpleForm redirect="list">
        <TextInput source="name" validate={validateName} />
        <BooleanInput source="activated" />
      </SimpleForm>
    </Create>
  )
};

export default GiftCreate;
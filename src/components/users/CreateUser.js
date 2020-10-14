import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  AutocompleteArrayInput,
} from 'react-admin';
import useStyles from './style';

const CreateUser = props => {
  const classes = useStyles();
  return (
    <Create {...props}>
      <SimpleForm redirect="list">
        <TextInput
          source="firstName"
          formClassName={classes.half_display}
        />
        <TextInput
          source="lastName"
          formClassName={classes.half_display_margin}
        />
        <br />
        <TextInput
          source="email"
          formClassName={classes.half_display}
        />
        <SelectInput
          choices={JSON.parse(localStorage.getItem('config')).genders}
          source="gender"
          formClassName={classes.half_display_margin}
        />
        <AutocompleteArrayInput
          source="permissions"
          choices={JSON.parse(localStorage.getItem('config')).permissions}
          optionText="name"
        />
      </SimpleForm>
    </Create>
  )
};

export default CreateUser;
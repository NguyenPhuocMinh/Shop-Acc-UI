import React from 'react';
import {
  Edit,
  SimpleForm,
} from 'react-admin';
import {
  TextInput,
  SelectInput,
  AutocompleteArrayInput,
} from '../../customize/InputCustom';
import useStyles from './style';

const EditUser = props => {
  const classes = useStyles();
  return (
    <Edit
      {...props}
      title="resources.users.title.edit"
    >
      <SimpleForm
        redirect="list"
        undoable={false}
      >
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
    </Edit>
  )
};

export default EditUser;
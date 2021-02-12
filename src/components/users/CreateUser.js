import React from 'react';
import {
  Create,
  SimpleForm,
  AutocompleteInput
} from 'react-admin';
import {
  TextInput,
  SelectInput,
  AutocompleteArrayInput,
} from '../../customize/InputCustom';
import useStyles from './style';
import { get } from 'lodash';

const choices = [
  { id: '123', first_name: 'Leo', last_name: '123456' },
  { id: '456', first_name: 'Jane', last_name: '321654' },
];

const matchSuggestion = (filterValue, choice) => get(choice, 'first_name').match(filterValue) || get(choice, 'last_name').match(filterValue);
const optionRenderer = choice => {
  return `${choice.first_name} ${choice.last_name}`;
};

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
        <AutocompleteInput
          choices={choices}
          optionText={choice => `${get(choice,'first_name')} ${get(choice,'last_name')}`}
          optionValue="id"
          matchSuggestion={matchSuggestion}
        />
      </SimpleForm>
    </Create>
  )
};

export default CreateUser;
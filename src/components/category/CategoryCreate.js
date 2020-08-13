import React from 'react';
import { Create, TabbedForm, FormTab, TextInput } from 'react-admin';
import InformationCategory from './tabs/InformationCategory';

const CategoryCreate = props => {
  return (
    <Create {...props}>
      <TabbedForm redirect="list">
        <FormTab label="resources.categories.label.image">
          <TextInput source="image" fullWidth />
          <TextInput source="thumbnail" fullWidth />
        </FormTab>
        <InformationCategory {...props} />
      </TabbedForm>
    </Create>
  )
};

export default CategoryCreate;
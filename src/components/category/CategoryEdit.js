import React from 'react';
import {
  Edit,
  SimpleForm,
  TabbedForm,
  FormTab,
  TextInput,
  ReferenceManyField,
  Datagrid,
  TextField,
  EditButton,
  NumberField,
  Toolbar,
  SaveButton
} from 'react-admin';
import ThumbnailField from './field/ThumbnailField';

const CategoryEditToolbar = props => {
  return (
    <Toolbar {...props} > </Toolbar>
  )
}

const CategoryEdit = props => {
  return (
    <Edit {...props} title="resources.categories.title.edit">
      <SimpleForm toolbar={<CategoryEditToolbar />} >
        <TextInput source="name" />
        <ReferenceManyField
          reference="products"
          target="categoryId"
          label="resources.categories.linked.products"
          perPage={20}
          fullWidth
        >
          <Datagrid>
            <ThumbnailField />
            <TextField source="name" />
            <NumberField
              source="price"
              options={{ style: 'currency', currency: 'VND' }}
            />
            <EditButton />
          </Datagrid>
        </ReferenceManyField>
      </SimpleForm>
    </Edit>
  )
};

export default CategoryEdit;
import React from 'react';
import {
  Edit,
  SimpleForm,
  BooleanInput,
  TextInput,
  SelectInput,
  ReferenceInput,
  AutocompleteArrayInput,
  ReferenceArrayInput,
  Toolbar,
  SaveButton
} from 'react-admin';
import { NumberInputFormat } from '../../customize/InputCustom';
import useStyles from './productStyle';

const EditToolbar = props => {
  return (
    <Toolbar {...props}>
      <SaveButton />
    </Toolbar>
  )
}

const ProductEdit = props => {
  const classes = useStyles();
  return (
    <Edit {...props}>
      <SimpleForm
        redirect="list"
        undoable={false}
        toolbar={<EditToolbar />}
      >
        <TextInput source="name" formClassName={classes.inline_block} />
        <TextInput source="weight" formClassName={classes.inline_block_margin} />
        <br />
        <NumberInputFormat
          label="resources.products.fields.price"
          source="price"
          formClassName={classes.inline_block} />
        <ReferenceInput
          source="productType"
          reference="productTypes"
          filter={{ activated: true }}
          formClassName={classes.inline_block_margin}
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
        <br />
        <NumberInputFormat
          label="resources.products.fields.quantity"
          source="quantity"
          formClassName={classes.inline_block} />
        <br />
        <ReferenceArrayInput
          source="smells"
          reference="smells"
          filter={{ activated: true }}
        >
          <AutocompleteArrayInput
            optionText="name"
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="gifts"
          reference="gifts"
          filter={{ activated: true }}
        >
          <AutocompleteArrayInput optionText="name" />
        </ReferenceArrayInput>
        <BooleanInput source="status" />
        <BooleanInput source="activated" />
      </SimpleForm>
    </Edit>
  )
}

export default ProductEdit;

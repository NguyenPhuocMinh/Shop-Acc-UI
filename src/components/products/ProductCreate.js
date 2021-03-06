import React from 'react';
import {
  Create,
  SimpleForm,
  BooleanInput,
  TextInput,
  SelectInput,
  ReferenceInput,
  AutocompleteArrayInput,
  ReferenceArrayInput
} from 'react-admin';
import { NumberInputFormat } from '../../customize/InputCustom';
import useStyles from './productStyle';

const ProductCreate = props => {
  const classes = useStyles();
  return (
    <Create {...props}>
      <SimpleForm redirect="list">
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
    </Create>
  )
}

export default ProductCreate;

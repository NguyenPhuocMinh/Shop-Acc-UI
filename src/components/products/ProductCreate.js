import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  NumberInput,
  ReferenceInput,
  BooleanInput
} from 'react-admin';
import useStyles from './productStyle';

const ProductCreate = props => {
  const classes = useStyles();
  return (
    <Create {...props}>
      <SimpleForm redirect="list">
        <TextInput source="name" formClassName={classes.inline_block} />
        <TextInput source="smell" formClassName={classes.inline_block_margin} />
        <br />
        <NumberInput source="weight" formClassName={classes.inline_block} />
        <NumberInput source="price" formClassName={classes.inline_block_margin} />
        <br />
        <ReferenceInput
          source="productType"
          reference="productTypes"
          filter={{ activated: true }}
          formClassName={classes.inline_block}
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
        <NumberInput source="quantity" formClassName={classes.inline_block_margin} />
        <BooleanInput source="status" />
        <BooleanInput source="activated" />
      </SimpleForm>
    </Create>
  )
}

export default ProductCreate;

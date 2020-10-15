import React from 'react';
import {
  Create,
  SimpleForm,
  BooleanInput
} from 'react-admin';
import {
  TextInput,
  SelectInput,
  NumberInputFormat,
  ReferenceInput
} from '../../customize/InputCustom';
import useStyles from './productStyle';

const ProductCreate = props => {
  const classes = useStyles();
  return (
    <Create {...props}>
      <SimpleForm redirect="list">
        <TextInput source="name" formClassName={classes.inline_block} />
        <TextInput source="smell" formClassName={classes.inline_block_margin} />
        <br />
        <TextInput source="weight" formClassName={classes.inline_block} />
        <NumberInputFormat source="price" formClassName={classes.inline_block_margin} />
        <br />
        <ReferenceInput
          source="productType"
          reference="productTypes"
          filter={{ activated: true }}
          formClassName={classes.inline_block}
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
        <NumberInputFormat source="quantity" formClassName={classes.inline_block_margin} />
        <BooleanInput source="status" />
        <BooleanInput source="activated" />
      </SimpleForm>
    </Create>
  )
}

export default ProductCreate;

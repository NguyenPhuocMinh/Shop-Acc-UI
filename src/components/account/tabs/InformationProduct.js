import React from 'react';
import {
  FormTab,
  TextInput,
  NumberInput,
  BooleanInput,
  SelectInput,
  PasswordInput,
} from 'react-admin';
import { validateRequired } from '../utils/validate';

const InformationProduct = props => {
  const { classes } = props;
  return (
    <FormTab
      {...props}
      label="resources.accounts.tabs.information"
    >
      <TextInput
        source="userName"
        formClassName={classes.width_display}
        className={classes.width_400}
        validate={validateRequired}
      />
      <PasswordInput
        source="password"
        formClassName={classes.width_display_margin}
        className={classes.width_400}
        validate={validateRequired}
      />
      <br />
      <TextInput
        source="rank"
        formClassName={classes.width_display}
        className={classes.width_400}
      />
      <NumberInput
        source="price"
        formClassName={classes.width_display_margin}
        className={classes.width_400}
        validate={validateRequired}
      />
      <br />
      <NumberInput
        source="hero"
        formClassName={classes.width_display}
        className={classes.width_400}
        validate={validateRequired}
      />
      <NumberInput
        source="gold"
        formClassName={classes.width_display_margin}
        className={classes.width_400}
        validate={validateRequired}
      />
      <br />
      <NumberInput
        source="skin"
        formClassName={classes.width_display}
        className={classes.width_400}
        validate={validateRequired}
      />
      <NumberInput
        source="pearl_points"
        formClassName={classes.width_display_margin}
        className={classes.width_400}
        validate={validateRequired}
      />
      <br />
      <SelectInput
        choices={JSON.parse(localStorage.webConfigs).STATUS_PRODUCTS}
        optionText="name"
        source="status"
        formClassName={classes.width_display}
        className={classes.width_400}
        validate={validateRequired}
      />
      <TextInput
        source="numberAcc"
        formClassName={classes.width_display_margin}
        className={classes.width_400}
      />
      <br />
      <BooleanInput source="activated" />
    </FormTab>
  )
};

export default InformationProduct;
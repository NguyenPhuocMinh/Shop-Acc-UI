import React from 'react';
import {
  FormTab,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput
} from 'react-admin';
import { withStyles, InputAdornment } from '@material-ui/core';
import styles from '../styles';

const InformationImage = ({ classes, ...props }) => {
  return (
    <FormTab
      {...props}
      label="resources.categories.label.information"
    >
      <TextInput source="name" />
      <NumberInput
        source="width"
        className={classes.width}
        formClassName={classes.widthFormGroup}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              cm
            </InputAdornment>
          ),
        }}
      />
      <NumberInput
        source="height"
        className={classes.height}
        formClassName={classes.heightFormGroup}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              cm
            </InputAdornment>
          ),
        }}
      />
    </FormTab>
  )
};

export default withStyles(styles)(InformationImage);
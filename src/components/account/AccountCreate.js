import React from "react";
import {
  Create,
  TabbedForm,
} from "react-admin";
import InformationProduct from './tabs/InformationProduct';
import { withStyles } from '@material-ui/core';
import styles from './utils/styles';

const AccountCreate = props => {
  return (
    <Create
      title="resources.accounts.title.create"
      actions={null}
      {...props}
    >
      <TabbedForm redirect="edit">
        <InformationProduct {...props} />
      </TabbedForm>
    </Create>
  )
};

export default withStyles(styles)(AccountCreate);

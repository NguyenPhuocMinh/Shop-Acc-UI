import React from "react";
import {
  Edit,
  translate,
  Toolbar,
  SaveButton,
  TabbedForm
} from "react-admin";
import InformationProduct from './tabs/InformationProduct';
import PremiereDate from './tabs/PhotoIntroduction';
import { withStyles } from '@material-ui/core';
import styles from './utils/styles';

const AccountEditToolbar = translate(({ translate, ...props }) => (
  <Toolbar {...props}>
    <SaveButton />
  </Toolbar>
));

const AccountEdit = props => {
  return (
    <Edit
      title="resources.accounts.title.edit"
      {...props}
      undoable={false}
    >
      <TabbedForm toolbar={<AccountEditToolbar />}>
        <InformationProduct {...props} />
        <PremiereDate {...props} />
      </TabbedForm>
    </Edit>
  )
};

export default withStyles(styles)(AccountEdit);

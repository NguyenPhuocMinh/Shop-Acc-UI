import React, { useState, forwardRef } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {
  useTranslate,
  showNotification,
} from 'react-admin';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import useStyles from './styles';
import TextFieldCustom from '../../custom/TextFieldCustom';
import validateForm from './validateForm';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ChangePassWord = props => {
  const { showNotification } = props;
  const classes = useStyles();
  const userId = localStorage.getItem('userId');
  const translate = useTranslate();
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(!openDialog);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleSubmitFetch = (values) => {
    const REST_API = process.env.REACT_APP_REST_API_URL;
    const request = new Request(REST_API + `/user/changePasswords/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' },
    })
    return fetch(request)
      .then(response => {
        if (response.status >= 400) {
          return response.json()
            .then(result => {
              showNotification(translate(result.error), 'warning')
            })
        }
        return response.json()
          .then(result => {
            showNotification(translate(result.message));
            setOpenDialog(false)
          })
      })
  };

  // const handleChange = event => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setState({ ...state, [name]: value })
  // };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {translate('resources.users.buttonChangePass')}
      </Button>
      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle >
          {translate('resources.users.dialogTitle')}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {translate('resources.users.dialogContentText')}
          </DialogContentText>
          <Formik
            initialValues={{
              currentPassword: '',
              newPassword: '',
              verifiedNewPassword: ''
            }}
            onSubmit={(values) => handleSubmitFetch(values)}
            validationSchema={validateForm(translate)}
          >
            {(props) => {
              const {
                dirty,
                handleSubmit,
                handleReset,
              } = props;
              return (
                <Form onSubmit={handleSubmit}>
                  <TextFieldCustom
                    label={translate('resources.users.currentPassword')}
                    name="currentPassword"
                    className={classes.text_field}
                    {...props}
                  />
                  <TextFieldCustom
                    label={translate('resources.users.newPassword')}
                    name="newPassword"
                    className={classes.text_field}
                    {...props}
                  />
                  <TextFieldCustom
                    label={translate('resources.users.verifiedNewPassword')}
                    name="verifiedNewPassword"
                    className={classes.text_field}
                    {...props}
                  />
                  <DialogActions>
                    <Button
                      onClick={handleClose}
                      color="primary"
                    >
                      {translate('pos.cancel')}
                    </Button>
                    <Button
                      type="submit"
                      disabled={!dirty}
                      color="primary"
                    >
                      {translate('pos.confirm')}
                    </Button>
                    <Button
                      type="button"
                      color="primary"
                      onClick={handleReset}
                      disabled={!dirty}
                    >
                      {translate('pos.reset')}
                    </Button>
                  </DialogActions>
                </Form>
              )
            }}
          </Formik>
        </DialogContent>
      </Dialog>
    </div >
  );
};

const mapDispatchToProps = {
  showNotification
}

export default connect(null, mapDispatchToProps)(ChangePassWord);
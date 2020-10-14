import React from "react";
import Button from '@material-ui/core/Button';
import ErrorIcon from '@material-ui/icons/Report';
import History from '@material-ui/icons/History';
import { Title, useTranslate } from 'react-admin';

const MyError = ({
  error,
  errorInfo,
  ...rest
}) => {
  console.log("errorInfo", errorInfo)
  const translate = useTranslate();
  return (
    <div>
      <Title title="Error" />
      <h1><ErrorIcon /> Something Went Wrong </h1>
      <div>A client error occurred and your request couldn't be completed.</div>
      {process.env.NODE_ENV !== 'production' && (
        <details>
          <h2>{translate(error.toString())}</h2>
          {errorInfo.componentStack}
        </details>
      )}
      <div>
        <Button
          variant="contained"
          icon={<History />}
          onClick={() => history.go(-1)}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default MyError;
import React from 'react';
import { TextInput } from 'react-admin';
import PropTypes from 'prop-types';
import defaultProps from './defaultProps';

const MuiTextInput = props => {
  const { variant } = props;
  return (
    <TextInput
      {...props}
      variant={variant}
    />
  )
};

MuiTextInput.defaultProps = {
  variant: defaultProps.variant
}

MuiTextInput.prototype = {
  source: PropTypes.string,
  variant: PropTypes.string,
}

export default MuiTextInput;
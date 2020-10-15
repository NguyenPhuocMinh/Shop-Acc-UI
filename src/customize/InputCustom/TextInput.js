import React from 'react';
import { TextInput } from 'react-admin';
import PropTypes from 'prop-types';
import defaultProps from './defaultProps';

const MuiTextInput = props => {
  const { source } = props;
  return (
    <TextInput
      {...props}
      source={source}
    />
  )
};

MuiTextInput.defaultProps = {
  variant: defaultProps.variant
}

MuiTextInput.propTypes = {
  source: PropTypes.string.isRequired,
  variant: PropTypes.string,
}

export default MuiTextInput;
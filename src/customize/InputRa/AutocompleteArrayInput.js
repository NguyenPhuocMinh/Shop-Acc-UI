import React from 'react';
import { AutocompleteArrayInput } from 'react-admin';
import PropTypes from 'prop-types';
import defaultProps from './defaultProps';

const MuiAutocompleteArrayInput = props => {
  const { variant } = props;
  return (
    <AutocompleteArrayInput
      {...props}
      variant={variant}
    />
  )
};

MuiAutocompleteArrayInput.defaultProps = {
  variant: defaultProps.variant
}

MuiAutocompleteArrayInput.prototype = {
  source: PropTypes.string,
  variant: PropTypes.string,
}

export default MuiAutocompleteArrayInput;
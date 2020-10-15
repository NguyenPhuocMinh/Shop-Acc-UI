import React from 'react';
import { AutocompleteArrayInput } from 'react-admin';
import PropTypes from 'prop-types';
import defaultProps from './defaultProps';

const MuiAutocompleteArrayInput = props => {
  const {
    source,
  } = props;
  return (
    <AutocompleteArrayInput
      {...props}
      source={source}
    />
  )
};

MuiAutocompleteArrayInput.defaultProps = {
  variant: defaultProps.variant
}

MuiAutocompleteArrayInput.propTypes = {
  source: PropTypes.string.isRequired,
  variant: PropTypes.string,
}

export default MuiAutocompleteArrayInput;
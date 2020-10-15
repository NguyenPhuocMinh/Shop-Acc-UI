import React from 'react';
import { SelectInput } from 'react-admin';
import PropTypes from 'prop-types';
import defaultProps from './defaultProps';

const MuiSelectInput = props => {
  const { source } = props;
  return (
    <SelectInput
      {...props}
      source={source}
    />
  )
};

MuiSelectInput.defaultProps = {
  variant: defaultProps.variant
}

MuiSelectInput.propTypes = {
  source: PropTypes.string.isRequired,
  variant: PropTypes.string,
}

export default MuiSelectInput;
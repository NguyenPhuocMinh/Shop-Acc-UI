import React from 'react';
import { ReferenceInput } from 'react-admin';
import PropTypes from 'prop-types';
import defaultProps from './defaultProps';

const MuiReferenceInput = props => {
  const { source } = props;
  return (
    <ReferenceInput
      {...props}
      source={source}
    />
  )
};

MuiReferenceInput.defaultProps = {
  variant: defaultProps.variant
}

MuiReferenceInput.propTypes = {
  source: PropTypes.string.isRequired,
  variant: PropTypes.string,
}

export default MuiReferenceInput;
import React from 'react';
import { SearchInput } from 'react-admin';
import PropTypes from 'prop-types';
import defaultProps from './defaultProps';

const MuiSearchInput = props => {
  const { source } = props;
  return (
    <SearchInput
      {...props}
      source={source}
    />
  )
};

MuiSearchInput.defaultProps = {
  variant: defaultProps.variant,
}

MuiSearchInput.propTypes = {
  source: PropTypes.string.isRequired,
  variant: PropTypes.string,
}

export default MuiSearchInput;
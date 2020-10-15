import React from 'react';
import { useInput, useTranslate } from 'react-admin';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';
import defaultProps from './defaultProps';

const NumberFormatCustom = (props) => {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      allowNegative={false}
      thousandSeparator
      isNumericString
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const NumberInputCurrency = props => {
  const {
    variant,
    label,
    className,
    formClassName,
    disabled
  } = props;
  const { input } = useInput(props);
  const translate = useTranslate();
  const {
    input: { name, onChange, ...rest },
    meta: { touched, error },
    isRequired
  } = useInput(props);

  return (
    <TextField
      {...input}
      {...props}
      name={name}
      variant={variant}
      label={translate(label)}
      onChange={onChange}
      error={!!(touched && translate(error))}
      helperText={touched && translate(error)}
      required={isRequired}
      InputProps={{
        inputComponent: NumberFormatCustom,
      }}
      formClassName={formClassName}
      className={className}
      disabled={disabled}
      {...rest}
    />
  );
};

NumberInputCurrency.defaultProps = {
  variant: defaultProps.variant,
  disabled: defaultProps.disabled
}

NumberInputCurrency.propTypes = {
  source: PropTypes.string.isRequired,
  variant: PropTypes.string,
}

export default NumberInputCurrency
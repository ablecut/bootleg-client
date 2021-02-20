import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import {
  labelClassName,
  input
} from './index.module.css';

const InputField = (props) => {

  const {
    value,
    type,
    placeholder,
    label,

    onChange,

    containerClass,
    labelClass,
    inputClass
  } = props;

  const _onChange = (e) => {
    if (typeof onChange === 'function') onChange(e);
  }

  return(
    <div className={clsx(containerClass)}>
      <p className={clsx(labelClassName, labelClass)}>{label}</p>
      <input 
        value={value}
        type={type}
        placeholder={placeholder}

        onChange={_onChange}

        className={clsx(input, inputClass)}
      />
    </div>
  );
}

InputField.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,

  onChange: PropTypes.func,

  containerClass: PropTypes.string,
  labelClass: PropTypes.string,
  inputClass: PropTypes.string
}

export default InputField;
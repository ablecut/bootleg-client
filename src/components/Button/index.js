import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import {
  buttonClassName
} from './index.module.css'

const Button = (props) => {

  const {
    label,
    disabled,

    onClick,

    buttonClass
  } = props;

  const _onClick = (e) => {
    if (typeof onClick === 'function') onClick(e);
  }

  return(
    <button 
      disabled={disabled}

      onClick={_onClick}
      
      className={clsx(buttonClassName, buttonClass)}
    >
      {label}
    </button>
  );
}

Button.defaultProps = {
  disabled: false
}

Button.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,

  onClick: PropTypes.func,

  buttonClass: PropTypes.string
}

export default Button;
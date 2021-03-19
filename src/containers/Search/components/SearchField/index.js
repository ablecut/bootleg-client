import React, { useState } from 'react';
import PropTypes from 'prop-types';

import InputField from '../../../../components/InputField';
import Button from '../../../../components/Button';

import classes from './index.module.css';

const SearchField = (props) => {

  const { 
    initialValue,

    handleClearButtonClick,
    handleSearchButtonClick
   } = props;

  const [value, setValue] = useState(initialValue);

  const onSearchValueChange = (e) => {
    setValue(e.target.value);
  }

  const onClearButtonClick = () => {
    if (typeof handleClearButtonClick === 'function') {
      handleClearButtonClick();
    }

    setValue('');
  }

  const onSearchButtonClick = () => {
    if (typeof handleSearchButtonClick === 'function') {
      handleSearchButtonClick(value);
    }
  }

  return (
    <div className={classes.container}>
      <InputField 
        value={value}
        placeholder='Search'

        onChange={onSearchValueChange}

        containerClass={classes.inputContainer} 
      />
      <div className={classes.buttonsContainer}>
        <Button 
          label='Search' 

          onClick={onSearchButtonClick}
          
          buttonClass={classes.searchButton} 
      />
        <Button 
          label='Clear' 

          onClick={onClearButtonClick}
          
          buttonClass={classes.clearButton} 
        />
      </div>
    </div>
  );
}

SearchField.propTypes = {
  initialValue: PropTypes.string,

  handleClearButtonClick: PropTypes.func,
  handleSearchButtonClick: PropTypes.func
}

export default SearchField;
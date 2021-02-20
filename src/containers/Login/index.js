import React from 'react';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';

import InputField from '../../components/InputField';
import Button from '../../components/Button';

import { 
  container, 
  formContainer, 
  titleContainer,
  title,
  form,
  inputContainerClass,
  buttonClass
} from './index.module.css';

const Login = () => {
  const renderForm = () => {

    if (Cookies.get('Authentication')) {
      return <Redirect to='/' />
    }

    return (
      <div className={container}>
        <div className={formContainer}>
          <div className={titleContainer}>
            <h1 className={title}>bootleg</h1>
          </div>
          <div className={form}>
            <InputField 
              label='Username:'
              placeholder='Enter Username'
              type='text'
            />
            <InputField 
              label='Password:'
              placeholder='Enter Password'
              type='password'

              containerClass={inputContainerClass}
            />
            <Button 
              label='Submit'
              buttonClass={buttonClass}
            />
          </div>
        </div>
      </div>
    )
  }

  return(
    renderForm()
  );
}

export default Login;
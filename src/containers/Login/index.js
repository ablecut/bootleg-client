import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import InputField from '../../components/InputField';
import Button from '../../components/Button';
import { loginAction } from '../../store/modules/Login/thunks/loginThunk';

import { 
  container, 
  formContainer, 
  titleContainer,
  title,
  form,
  inputContainerClass
} from './index.module.css';

const Login = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onUsernameChange = (e) => {
    setUserName(e.target.value);
  }

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const onSubmitClick = () => {
    if (userName.length === 0 || password.length === 0) {
      toast.error('UserName and Password Cannot be Empty');
      return;
    }

    dispatch(loginAction({
      username: userName,
      password
    }, displayLoginError));
  }

  const displayLoginError = (errorMessage) => {
    toast.error(errorMessage);
  }

  const renderForm = () => {

    if (Cookies.get('Authentication')) {
      return <Redirect to='/' />
    }

    return (
      <div className={container}>
        <ToastContainer
          autoClose={2000}
          pauseOnHover={false}
        />
        <div className={formContainer}>
          <div className={titleContainer}>
            <h1 className={title}>bootleg</h1>
          </div>
          <div className={form}>
            <InputField 
              label='Username:'
              placeholder='Enter Username'
              type='text'
              value={userName}

              onChange={onUsernameChange}
            />
            <InputField 
              label='Password:'
              placeholder='Enter Password'
              type='password'
              value={password}

              onChange={onPasswordChange}

              containerClass={inputContainerClass}
            />
          </div>
          <Button 
              label='Submit'

              onClick={onSubmitClick}
          />
        </div>
      </div>
    )
  }

  return(
    renderForm()
  );
}

export default Login;
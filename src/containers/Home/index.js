import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import SuspenseLoader from '../../components/SuspenseLoader';
import MenuCard from '../../components/MenuCard';
import logoutIcon from '../../assets/svgs/logout.svg';
import searchIcon from '../../assets/svgs/search.svg';
import { logoutAction } from '../../store/modules/Auth/thunks/logoutThunk';

import classes from './index.module.css';

const Home = (props) => {
  const logout = <img src={logoutIcon} height='80px' width='80px' alt='logoutIcon'/>;
  const search = <img src={searchIcon} height='80px' width='80px' alt='searchIcon'/>;

  const dispatch = useDispatch();

  const isLoggingOut = useSelector((state) => {
    return state.auth.logout.loading;
  });
  
  const logoutSuccessCallback = () => {
    window.location.href = '/';
  }

  const displayFailureToast = (errorMessage) => {
    toast.error(errorMessage);
  }

  const onLogoutCardClick = () => {
    dispatch(logoutAction(displayFailureToast, logoutSuccessCallback));
  }

  const renderContent = () => {
    if (isLoggingOut) return <SuspenseLoader />;

    return (
      <div className={classes.container}>
          <ToastContainer
            autoClose={2000}
            pauseOnHover={false}
          />
        <div className={classes.menuGrid}>
          <MenuCard 
            title='Search'
            icon={search}
            to='/search'
          />
          <MenuCard 
            title='Logout'
            icon={logout}
  
            onCardClick={onLogoutCardClick}
          />
        </div>      
      </div>
    );
  }

  return renderContent();
}

export default Home;
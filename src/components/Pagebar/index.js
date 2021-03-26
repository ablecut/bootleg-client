import React from 'react';
import Cookies from 'js-cookie';
import { withRouter } from 'react-router-dom';

import homeIcon from '../../assets/svgs/home.svg';
import backIcon from '../../assets/svgs/back.svg';

import classes from './index.module.css';

const Pagebar = (props) => {

  const onHomeClick = () => {
    props.history.push('/');
  }

  const onBackClick = () => {
    props.history.goBack();
  }

  const renderPagebar = () => {
    if (!Cookies.get('Authentication')) return null;

    return (
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <img 
            src={backIcon} 
            alt={'backIcon'} 

            onClick={onBackClick}

            className={classes.image}   
          />
          <span className={classes.titleText}>bootleg</span>
          <img 
            src={homeIcon} 
            alt={'homeIcon'} 

            onClick={onHomeClick}

            className={classes.image} />
        </div>
      </div>
    );
  }

  return renderPagebar();
}

export default withRouter(Pagebar);
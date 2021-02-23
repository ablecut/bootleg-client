import React from 'react';

import MenuCard from '../../components/MenuCard';
import settingsIcon from '../../assets/svgs/settings.svg';

import classes from './index.module.css';

const Home = () => {
  const settings = <img src={settingsIcon} height='80px' width='80px' alt='settingsIcon'/>

  return(
    <div className={classes.container}>
      <div className={classes.menuGrid}>
        <MenuCard 
          title='Settings'
          icon={settings}
        />
      </div>      
    </div>
  );
}

export default Home;
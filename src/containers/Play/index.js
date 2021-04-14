import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Tile from './components/Tile';
import searchIcon from '../../assets/svgs/search.svg';

import classes from './index.module.css';

const Play = () => {

  const { queue, currentIndex } = useSelector((state) => {
    return state.queue;
  })

  const renderContent = () => {
    if (!queue || !queue?.length) {
      return (
        <div className={classes.emptyContainer}>
          <img src={searchIcon} alt='searchIcon' className={classes.searchIcon} />
          <div className={classes.emptyText}>No tracks found, Search <Link to='/search' className={classes.here}>here</Link> and add to Queue</div>
        </div>
      );
    }

    return (
      <div className={classes.container}>
        <Tile trackLoading imgSrc={queue[currentIndex]?.thumbnail} />
        <div className={classes.title}>{queue[currentIndex]?.title}</div>
      </div>
    );
  }

  return renderContent()
}

export default Play;
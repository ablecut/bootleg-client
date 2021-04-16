import React,{ useRef, useEffect } from 'react';

import classes from './index.module.css';

const Player = (props) => {

  const { onPlayerMount } = props;

  const playerRef = useRef(null);

  useEffect(() => {
    onPlayerMount(playerRef);
  }, [onPlayerMount])

  return (
    <audio ref={playerRef} className={classes.player} />
  );
}

export default Player;
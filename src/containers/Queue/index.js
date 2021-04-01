import React from 'react';

import TrackCard from '../../components/TrackCard';

import classes from './index.module.css';

const Queue = () => {
  return (
    <div className={classes.container} >
    <TrackCard track={{
      channelName: "Kero Kero Bonito",
      duration: "198",
      thumbnail: "https://i.ytimg.com/vi/rY-FJvRqK0E/mqdefault.jpg",
      title: "Kero Kero Bonito - Flamingo",
      url: "https://www.youtube.com/watch?v=rY-FJvRqK0E"
    }
    
    }
      showRemove
      showAddToQueue
      showPlay
      activeTrack
    />
    </div>
  );
}

export default Queue;
import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import AudioPlayer from './components/AudioPlayer';

const MemoizedPlayer = memo(AudioPlayer)

const Player = () => {

  const { username } = useSelector((state) => {
    return state.auth.login
  })

  const { queue, currentIndex, currentSecond } = useSelector((state) => {
    return state.queue;
  });

  const src = queue[currentIndex]?.url;

  const onReady = useCallback((player) => {
    console.log(player);
  }, []);

  const onTimeChange = useCallback((player) => {
    console.log('time updated');
  }, []);

  const renderPlayer = () => {

    if (!username) return null;

    if (queue.length < 1) return null;

    return (
      <MemoizedPlayer 
        src={src}
        timeInSecs={currentSecond}

        onReady={onReady}
        onTimeChange={onTimeChange}
      />
    );
  }

  return renderPlayer();
}

export default Player;
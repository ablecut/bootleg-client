import React, { useEffect, memo, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Player from './components/Player';
import { setInitialData } from './store/modules/Queue/thunks/queueThunk';
import PlayerContext from './contexts/PlayerContext';

const MemoizedPlayer = memo(Player);

const App = (props) => {

  const { username } = useSelector((state) => {
    return state.auth.login;  
  });
  
  const dispatch = useDispatch();

  const [playerRef, setPlayerRef] = useState(false);

  useEffect(() => {
    if (username) {
      dispatch(setInitialData(username));
    }
  }, [dispatch, username]);

  const onPlayerMount = useCallback((playerRef) => {
    setPlayerRef(playerRef);
  }, []);

  const renderChildren = () => {
    if (!playerRef) return null;

    return (
      <PlayerContext.Provider
        value={{
          playerRef
        }}
      >
        {props.children}
      </PlayerContext.Provider>
    );
  }

  return (
    <>
      {renderChildren()}
      <MemoizedPlayer onPlayerMount={onPlayerMount} />
    </>
  );
}

export default App;
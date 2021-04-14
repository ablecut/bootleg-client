import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Player from './components/Player';
import { setInitialData } from './store/modules/Queue/thunks/queueThunk';

const App = (props) => {

  const { username } = useSelector((state) => {
    return state.auth.login;  
  });
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (username) {
      dispatch(setInitialData(username));
    }
  }, [dispatch, username]);

  return (
    <>
      {props.children}
      <Player />
    </>
  );
}

export default App;
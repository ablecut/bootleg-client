import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { ToastContainer } from 'react-toastify';

import { displayErrorToast } from '../../../../utils';

import classes from './index.module.css';

const AudioPlayer = (props) => {
  const { src, timeInSecs, onReady, onTimeChange } = props;

  const audioPlayerRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/play', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authentication': Cookies.get('Authentication')
          },
          body: JSON.stringify({
            url: src
          })
        });

        const reader = await response.body.getReader();

        const stream = await new ReadableStream({
          start: (controller) => {
            const pump = async () => {
              const { done, value } = await reader.read();
              
              if (done) {
                controller.close();
                return;
              }
              
              controller.enqueue(value);
              pump();
            }
            pump();
          }
        });

        const resp = await new Response(stream);

        const blob = await resp.blob();

        const url = await URL.createObjectURL(blob);

        audioPlayerRef.current.src = url;

        onReady(audioPlayerRef.current);

        audioPlayerRef.current.currentTime = timeInSecs || 0;

        audioPlayerRef.current.addEventListener('timeupdate', () => {
          onTimeChange(audioPlayerRef.current);
        })
      }
      catch(err) {
        displayErrorToast('Some Error Occured');
      }
    })();
  }, [src, onReady, timeInSecs, onTimeChange]);

  return (
    <div>
      <ToastContainer
        autoClose={2000}
        pauseOnHover={false}
      />
      <audio ref={audioPlayerRef} className={classes.player} />
    </div>
  );
}

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  timeInSecs: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  onReady: PropTypes.func.isRequired,
  onTimeChange: PropTypes.func.isRequired
}

export default AudioPlayer;
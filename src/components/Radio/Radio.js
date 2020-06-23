import React, { useState, useEffect } from 'react'
import { TwitchChat } from 'react-twitch-embed';
import ReactPlayer from "react-player"
import './Radio.css'

export default function Radio ({ channel }) {

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const StreamChat = () => {
    return (
      <div className="chat">
        <TwitchChat className="chat" channel={channel} theme="dark" height="100%" parent={['room-one-client.herokuapp.com/radio/:name']} />
      </div>
    );
  }

  function readyHandler () {
    setLoaded(true);
  }

  return (
    <div>
      {/* <button className="chat-button" onClick={() => setLoaded(!loaded)} >SHOW/HIDE CHAT</button> */}
      <div className="radio-container" id="radio" style={{ height: "100vh", display: "flex", justifyItems: "center" }}>
        <ReactPlayer width="100%" height="100%"
          controls={false}
          playing={true}
          className="player"
          onReady={readyHandler}
          // onPlay={readyHandler}
          config={{
            twitch: {
              options: {
                channel,
                theme: 'dark',
              }
            }
          }}
          url={`https://www.twitch.tv/${channel}`}
        />
        {/* {loaded ? StreamChat() : null} */}
      </div>
    </div>
  )
}
import React, { useState } from 'react'
import { TwitchChat } from 'react-twitch-embed';
import ReactPlayer from "react-player"
// import moment from 'moment';
import './Radio.css'

export default function Radio ({ channel }) {

  // const [videoId, setVideoID] = useState('')
  const [loaded, setLoaded] = useState(false)

  // useEffect(() => {
  //   setVideoID(id)
  // }, [id])

  // function countdown () {
  //   let future = new Date(Date.now() + 4.32e+7)
  //   return setInterval(() => {
  //     return moment(future - Date.now()).format('SS')
  //   }, 1000);
  // };

  const StreamChat = () => {
    return (
      <div className="chat" /* style={{ padding: "50px 0" }} */>
        <TwitchChat className="chat" channel={channel} theme="dark" height="100%" parent={['localhost', `https://www.twitch.tv/${channel}`]} />
      </div>
    );
  }

  // const Spinner = () => {
  //   return (
  //     <div id="spinner">
  //       <div className="title">Set starts in {countdown()} minutes</div>
  //     </div>
  //   )
  // }

  function readyHandler () {
    setLoaded(true);
  }

  return (
    <div>
      <button className="chat-button" onClick={() => setLoaded(!loaded)} >Toggle chat</button>
      <div className="radio-container" id="radio" style={{ height: "100vh", display: "flex", justifyItems: "center" }}>
        <ReactPlayer width="100%" height="100%"
          controls={false}
          playing={true}
          // light={room1Logo}
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
        {loaded ? StreamChat() : null}
      </div>
    </div>
  )
}
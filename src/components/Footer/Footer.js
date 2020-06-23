import React from 'react';
import mixcloud from '../../assets/mixcloud.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer () {
  return (
    <div style={{ padding: '10px 30px', width: '100vw', display: 'flex', justifyContent: 'center' }}>
      <a className="button is-small is-warning is-facebook" rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/room1drumandbass/">
        <span className="icon">
          <i className="fab fa-facebook fa-lg"></i>
        </span>
      </a>
      <a className="button is-small is-warning is-instagram" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/room1drumandbass/">
        <span className="icon">
          <i className="fab fa-instagram fa-lg"></i>
        </span>
      </a>
      <a className="button is-small is-warning is-twitter" rel="noopener noreferrer" target="_blank" href="https://twitter.com/room1dnb?lang=en">
        <span className="icon">
          <i className="fab fa-twitter fa-lg"></i>
        </span>
      </a>
      <a className="button is-small is-warning is-youtube" rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/channel/UCT4HyOvecfRYEmRSfbCo4Hg">
        <span className="icon">
          <i className="fab fa-youtube fa-lg"></i>
        </span>
      </a>
      <a className="button is-small is-warning is-soundcloud" rel="noopener noreferrer" target="_blank" href="https://soundcloud.com/dj_altitude">
        <span className="icon">
          <i className="fab fa-soundcloud"></i>
        </span>
      </a>
      <a className="button is-small is-warning is-pink" rel="noopener noreferrer" target="_blank" href="https://www.mixcloud.com/Room_1_Drum_And_Bass/stream/">
        <span className="icon">
          <img src={mixcloud} alt="mixcloud" style={{ filter: 'contrast(70%)' }}></img>
        </span>
      </a>
    </div>)
}

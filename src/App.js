import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Radio from './components/Radio/Radio.js'
import NavBar from './components/NavBar/NavBar.js';
import DJList from './containers/DJList/DJList.js';
import DJInfo from './components/DJInfo/DJInfo.js';
import Shop from './components/Shop/Shop.js';
import Eventgallery from './containers/EventGallery/EventGallery';
import RecordLabel from './containers/RecordLabel/RecordLabel';
import RecordLabelDJ from './components/RecordLabelDJ/RecordLabelDJ.js';
import Home from './components/Home/Home';
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import mixcloud from './assets/mixcloud.png'
import Client from 'shopify-buy';

export default function App () {

  // shopify-buy client
  const client = Client.buildClient({
    storefrontAccessToken: '4de3f1a884ec60a6cd06f147d98e6fcf',
    domain: 'room-1-drum-and-bass.myshopify.com'
  });

  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/radio/dnb' render={() => <Radio channel='jessutv' />} />
          <Route path='/radio/electronic' render={() => <Radio channel='MaryLe_Mar' />} />
          <Route path='/radio/hip-hop' render={() => <Radio channel='FreshRotations' />} />
          <Route path='/radio/chillstep' render={() => <Radio channel='gunselsenol' />} />
          <Route path='/radio/dubstep' render={() => <Radio channel='Miinx_' />} />
          <Route path='/djs' component={DJList} />
          <Route path='/eventgallery/:event' component={Eventgallery} />
          <Route path='/shop' render={() => <Shop client={client} />} />
          {/* <Route path='/cart' component={Cart} /> */}
          <Route exact path='/record-label' component={RecordLabel} />
          <Route path='/record-label/:dj' render={() => <RecordLabelDJ client={client} />} />
          <Route path='/dj/:name' component={DJInfo} />
          {/* <Route path='/dj-area' render={props => <DJArea setIds={setIds} {...props} />} /> */}
        </Switch>
      </Router>
      <footer >
        <div style={{ padding: '10px 20px', width: '100vw', display: 'flex', justifyContent: 'center', paddingRight: '30px' }}>
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
        </div>
      </footer>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
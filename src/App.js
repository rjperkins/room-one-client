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
import Client from 'shopify-buy';
import NotFound404 from './components/404/NotFound404.js';
import Footer from './components/Footer/Footer.js';
import ComingSoon from './components/ComingSoon/ComingSoon.js';

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
          <Route exact path='/record-label' component={RecordLabel} />
          <Route path='/record-label/:dj' render={() => <RecordLabelDJ client={client} />} />
          <Route path='/dj/:name' component={DJInfo} />
          <Route path='/events' component={ComingSoon} />
          <Route component={NotFound404} />
          {/* <Route path='/dj-area' render={props => <DJArea setIds={setIds} {...props} />} /> */}
        </Switch>
      </Router>
      <footer >
        <Footer />
      </footer>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
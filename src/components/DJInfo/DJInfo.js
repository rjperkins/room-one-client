import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './DJInfo.css'
import room1Logo from '../../assets/Room1logo.jpeg';

export default function DJInfo ({ location }) {

  console.log(location.state);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  let dj;
  if (location.state) { dj = location.state.dj }
  else { return <Redirect to="/djs" /> }


  return (
    <div style={{ minHeight: '100vh', padding: '1px' }} >
      <div className="info-pic-container" style={{ display: 'flex', paddingTop: '60px' }}>
        <img className="profile-pic" src={dj && dj.ProfilePicture ? dj.ProfilePicture : room1Logo} alt="" />
        <div style={{ padding: '30px' }}>
          <p style={{ color: 'white', fontSize: '2em' }}>{dj && dj.DJ}</p>
          <p>{dj && dj.Country}</p>
          <p>{dj && dj.City}</p>
          <p style={{ fontSize: '1.2em' }}>{dj && dj.Genres}</p>
          <p style={{ color: 'white', fontSize: '1em', margin: '20px 0' }}>{dj && dj.DJBio.slice(1, -1)}</p>
          <p>{dj && dj.Label}</p>
          <div style={{ margin: '20px 0', wordWrap: 'break-word' }}>
            {dj && dj.SocialMediaLinks.split('\n').map(el =>
              <p ><a style={{ color: 'hsla(48, 100%, 67%, 0.589)' }} href={el} target='_blank' rel='noopener noreferrer'>{el}</a></p>
            )}
          </div>
        </div>
      </div>
      <div style={{ margin: "20px 0 " }}>
        {dj && dj.Room1GuestMixLink.split(' ').map(mix =>
          <ReactPlayer width="100%" height="20vh"
            controls={true}
            style={{ alignSelf: "center" }}
            url={mix}
          />
        )}
      </div>
      <div className="events" style={{ textAlign: 'center' }}>
        <p style={{ color: 'white', fontSize: '1.5em', textAlign: 'center' }}>PREVIOUS EVENTS</p>
        <div className="flyers">
          {dj && dj.PreviousEventFlyers ? dj.PreviousEventFlyers.split(' ').map(event => {

            return <Link to={{ pathname: `/eventgallery/${event.match(/([^/]+)(?=\.\w+$)/)[0]}`, state: `${event.match(/([^/]+)(?=\.\w+$)/)[0]}` }}>
              <img
                className="event-flyer"
                src={event}
                alt=""
              />
            </Link>
          }) : <p style={{ textAlign: 'center', padding: '40px 0' }}>No events available</p>}
        </div>
      </div>
    </div >

  )
}

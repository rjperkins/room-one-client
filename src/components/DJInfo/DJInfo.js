import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './DJInfo.css'

export default function DJInfo ({ location }) {
  const { dj } = location.state;

  return (
    <div style={{ minHeight: '100vh' }} >
      <div className="info-pic-container" style={{ display: 'flex', paddingTop: '60px' }}>
        <div style={{ padding: '30px' }}>
          <p style={{ color: 'white', fontSize: '2em' }}>{dj.DJ}</p>
          <p>{dj.Country}</p>
          <p>{dj.City}</p>
          <p style={{ fontSize: '1.2em' }}>{dj.Genres}</p>
          <p style={{ color: 'white', fontSize: '1em', margin: '20px 0' }}>{dj.DJBio.slice(1, -1)}</p>
          <p>{dj.Label}</p>
          <div style={{ margin: '20px 0', wordWrap: 'break-word' }}>
            {dj.SocialMediaLinks.split('\n').map(el =>
              <p ><a style={{ color: 'hsla(48, 100%, 67%, 0.589)' }} href={el} target='_blank' rel='noopener noreferrer'>{el}</a></p>
            )}
          </div>
        </div>
        <img className="profile-pic" src={dj.ProfilePicture} style={{ width: 'auto', height: '400px', margin: '40px 20px' }} alt="" />
      </div>
      <div style={{ margin: "20px 0 " }}>
        {dj.Room1GuestMixLink.split(' ').map(mix =>
          <ReactPlayer width="100%" height="20vh"
            controls={true}
            style={{ alignSelf: "center" }}
            url={mix}
          />
        )}
      </div>
      <div className="events" style={{ textAlign: 'center' }}>
        <p style={{ color: 'white', fontSize: '1.5em', textAlign: 'center' }}>PREVIOUS EVENTS</p>
        {dj.PreviousEventFlyers ? dj.PreviousEventFlyers.split(' ').map(event => {

          return <Link to={{ pathname: `/eventgallery/${event.match(/([^/]+)(?=\.\w+$)/)[0]}`, state: `${event.match(/([^/]+)(?=\.\w+$)/)[0]}` }}><img className="event-flyer" src={event} style={{ width: '400px', height: '250px', margin: '20px', objectFit: 'fill' }} alt="" /></Link>
        }) : <p style={{ textAlign: 'center', padding: '40px 0' }}>No events available</p>}
      </div>
    </div >

  )
}

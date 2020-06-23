import React from 'react'
import room1cover from '../../assets/room1cover.jpg';
import altitudeHome from '../../assets/altitude-home.jpg';
import './Home.css'

export default function Home () {
  return (
    <div className="all-home" style={{ minHeight: '100vh' }}>
      <img className='cover-image-home' src={room1cover} alt="room 1 cover" style={{ maxHeight: '100vh', margin: '0 auto' }}></img>
      <div className="info-dan" style={{ display: 'flex', margin: '5px auto', maxWidth: '900px', alignItems: 'center', justifyContent: 'center', color: 'gray', fontSize: '18px', fontWeight: 'bold', textAlign: 'justify', padding: '10px' }}>
        <img src={altitudeHome} alt="dj-altitude" style={{ height: '200px', margin: '20px' }}></img>
        <p style={{ textAlign: 'center' }}>Made in the Seychelles, raised in London and now resident in Barcelona. Altitude is the founder of Room 1.
        Known for his ability to take you on a flight through liquid and atmospheric Drum and Bass.
        <br />
        Here he puts all his work under one roof combining forces with DJs around the world to make Room 1 soar.
        <br />
        This is Altitude.
        </p>
      </div>
    </div >
  )
}

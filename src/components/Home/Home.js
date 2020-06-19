import React from 'react'
import room1cover from '../../assets/room1cover.jpg';
import altitudeHome from '../../assets/altitude-home.jpg';

export default function Home () {
  return (
    <div >
      <div style={{
        backgroundImage: `url(${room1cover})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat', minHeight: '100vh', display: 'flex', justifyContent: 'center', fontFamily: 'Work Sans'
      }}>
        {/* <div style={{ textAlign: 'center', fontSize: '3rem', color: 'white', padding: '100px', float: 'inline-end' }}>WELCOME TO THE HOME OF ROOM 1</div> */}
        {/* <img src={room1cover} alt="room 1 cover" style={{ maxHeight: '750px' }}></img> */}
      </div>
      <div style={{ display: 'flex', margin: '30px auto', width: '900px', alignItems: 'center', justifyContent: 'center', color: 'gray', fontSize: '18px', fontWeight: 'bold', textAlign: 'justify' }}>
        <img src={altitudeHome} alt="dj-altitude" style={{ height: '200px', margin: '20px' }}></img>
        {/*  Daniel Bradburn
        <br />
        <br /> */}
        Made in the Seychelles, raised in London and now resident in Barcelona. Altitude is the founder of Room 1.
        Known for his ability to take you on a flight through liquid and atmospheric Drum and Bass.
        <br />
        Here he puts all his work under one roof combining forces with DJs around the world to make Room 1 soar.
        <br />
        This is Altitude.

      </div>
    </div >
  )
}

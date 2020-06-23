import React from 'react'
import room1Logo from '../../assets/Room1logo.jpeg'
import './NotFound404.css'

export default function NotFound404 () {
  return (
    <div >
      <div className="not-found" style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', paddingTop: '60px', textAlign: 'center' }}>
        <img src={room1Logo} alt="logo" />
        <p style={{ fontSize: '40px' }}>404 <br />Page Not Found</p>
      </div>
    </div>
  )
}

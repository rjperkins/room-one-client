import React from 'react'
import './DJCard.css'
import room1Logo from '../../assets/Room1logo.jpeg';

function DJCard ({ dj }) {

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: '286px',
      height: '286px',
      fontFamily: 'AG, sans-serif',
      fontSize: '15px',
      lineHeight: '23px',
      color: '#4c4c4c',
      margin: '30px 15px',
      background: '#4c4c4c',
    },
    img: {
      minHeight: '280px'
    }
  }

  return (
    <div className="dj" style={styles.container} >
      <img className="dj-img" style={styles.img} src={dj.ProfilePicture ? dj.ProfilePicture : room1Logo} alt="dj-profile" />
      <div className="dj-name" >{dj.DJ.toUpperCase()}</div>
    </div>
  )
}

export default DJCard;
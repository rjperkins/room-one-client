import React, { useEffect, useState } from 'react'
import apiService from '../../Services/apiService'

export default function Eventgallery ({ location }) {

  const [images, setImages] = useState([])

  useEffect(() => {
    apiService.cloudinaryGetByTag()
      .then(response => response)
      .then(data => {
        const filterdImages = data.resources.filter(image => image.public_id.includes(location.state.toLowerCase()))
        setImages(filterdImages);
      });
    window.scrollTo(0, 0)
  }, [location.state])

  const styles = {
    container: {
      display: 'flex',
      padding: '5em 3em',
      flexWrap: 'wrap',
      justfyContent: 'space-around',
      textAlign: 'center',
      minHeight: '100vw',

    },
    img: {
      height: '280px',
      margin: '30px 10px',
    }
  }

  return (
    <div style={{ display: 'flex' }}>
      <div style={styles.container}>
        {images && images/* .slice(0, 1) */.map(image => <img src={image.url} alt='event' key={image.asset_id} style={styles.img} />)}
      </div>
    </div>
  )
}

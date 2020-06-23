import React, { useEffect, useState } from 'react';
import apiService from '../../Services/apiService';
import CircleLoader from "react-spinners/CircleLoader";
import './EventGallery.css'

export default function Eventgallery ({ location }) {

  const [images, setImages] = useState([]);

  useEffect(() => {
    apiService.cloudinaryGetByTag()
      .then(response => response)
      .then(data => {
        const filterdImages = data.resources.filter(image => image.public_id.includes(location.state.toLowerCase()))
        setImages(filterdImages);
      });
    window.scrollTo(0, 0)
  }, [location.state])

  return (
    <div className='bts-container'>

      {images.length ?
        images.map(image => <img className='bts' src={image.url} alt='event' key={image.asset_id} />)
        : <CircleLoader
          css="margin-top:30vh;"
          size={100}
          color={"yellow"}
        />
      }

    </div>
  )
}

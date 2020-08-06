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
        <p style={{ textAlign: 'center' }}>Founded in 2019 by London raised / Barcelona based Liquid Drum and Bass DJ Altitude.
        A platform to give exposure to up and coming Drum and Bass DJ’s and Producers from all over the world.
        <br />
        The concept came from attending club sessions and finding that some of the ‘unknown’ DJ’s in Room 2 and Room 3 would at times be as talented or even execute a better set than the headliners in Room 1. Unknown DJ’s that deserve the opportunity to play in Room 1. But for whichever reason... may never get the opportunity.
        The same for producers. There are some producers out there with music that’s not receiving the exposure they deserve.
        <br />
        Altitude in 2018 decided to launch the platform of Room 1. To bring together the DJ’s and producers who have the talent level to rock the main stage.
        Additionally, Room 1 aims to do away with the politics of electronic music. There are so many different genres of Drum and Bass. Dark, Deep, Jungle, Liquid, Intelligent, Neuro Funk, Jump Up and new ones that will inevitably drop in the future. You may not like a genre, but you can respect the dedication and work that the artist has put into their craft. What one person may not like, there will be 100,000 other people who do. Music is subjective. There is no one genre better than the other. Just personal taste. So we welcome our squad to showcase their more unique musical tastes on our appropriate genre specific channels.
        <br />
        With this philosophy...within only a few months of launching Room 1 it has already grown into a collective of international Drum and Bass and Jungle DJ’s / producers. So far encompassing of London, Manchester, Colombia, Dominican Republic, Venezuela, Germany and Russia. Across all genres of Drum and Bass.
        Some who are signed to established record labels. Some who own record labels. Some who have already rocked the main stage alongside headliners such as Fabio, Remarc, Hybrid, Grooverider, Ragga Twins and Flava to name a few.
        <br />
        We anticipate our squad will keep growing both in numbers and strength into 2021.
        <br />
        Welcome to Room 1
        Follow Room 1
        YouTube http://bit.ly/2FYBj0N
        MixCloud https://www.mixcloud.com/Room_1_Drum_And_Bass/
        SoundCloud https://soundcloud.com/room1drumandbass
        Facebook https://www.facebook.com/room1drumandbass/
        Twitter https://twitter.com/room1dnb
        Bookings / inquiries room1drumandbass@gmail.com
        Follow DJ Altitude
        Instagram https://www.instagram.com/djaltitudednb
        Mixcloud https://www.mixcloud.com/dj_altitude/
        Soundcloud - https://soundcloud.com/dj_altitude
        Facebook https://www.facebook.com/altitudemusic/
        YouTube http://bit.ly/2FDg1d7
        <br />
        DJ Altitude Bio
        "Altitude is a Liquid Drum and Bass head. Native of South London UK, he was influenced by all genres of Jungle, DnB and Dubstep growing up, but when Liquid Drum N Bass aired in the early 2000's, he found his passion. The production sounds of Logistics and the mixing genius of Bukem had him hooked to the uplifting side of the genre.
        Whilst his true love is the melodic tone of Liquid, he's also known to steer into the darker, deeper elements of Drum and Bass; at times paying homage to its roots with a journey through Jungle.
        Altitude began via the underground scene. Booked to play at after parties in Barcelona, London and Miami.
        In 2017, Barcelona based Drum and Bass collective ‘Subconscious’ heard his sound and recruited him to their roster of DJ’s.
        Shortly after, he took the stage at ‘The All Junglists Festival Vol.9’ at Sala Upload, Barcelona and the infamous ‘Drum and Bass’ Thursdays at Plataforma, Barcelona.
        In 2018 he launched his own music podcast channel ‘Room 1’. Showcasing the full spectrum of the Drum and Bass genre.
        Then in 2019 ´TeufKulture´ added him to their DJ roster following booking him to play in Bulgaria.
        Also in 2019 Altitude launched the first ´Room 1´ 12 hour Drum and Bass party in 2019. The only 12 hour DnB party in Barelona.
        He´s an atmospheric liquid drum and bass fanatic, with a penchant for deep dark DnB and Jungle.
        Identifiable by his trademark atmospheric Liquid DnB sets, it’s clear why they call him Altitude."
        </p>
      </div>
    </div >
  )
}

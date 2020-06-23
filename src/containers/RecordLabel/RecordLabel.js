import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import DJCard from '../../components/DJCard/DJCard';
import apiService from '../../Services/apiService';
import CircleLoader from "react-spinners/CircleLoader";

export default function DJList () {

  const [userInput, setUserInput] = useState("");
  const [djList, setDjList] = useState([])
  const [filteredDjList, setFilteredDjList] = useState([]);

  let i = 0;
  useEffect(() => {
    window.scrollTo(0, 0)
    const abortController = new AbortController();
    apiService.getDJs()
      .then(data => data)
      .then(djs => {
        setDjList(djs['DnBDJs'].slice(1).filter(dj => dj.IsRecordLabel === "TRUE").sort((a, b) => a.DJ < b.DJ ? -1 : 1))
      });
    return () => {
      abortController.abort();
    };
  }, [])

  const handleChange = (event) => {
    event.preventDefault();
    setUserInput(event.target.value);
    let filtered = [...djList].filter(dj => dj.DJ.toLowerCase().includes(event.target.value.toLowerCase()))
    setFilteredDjList(filtered)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div style={{ minHeight: '100vh', padding: "1px 3em 3em", textAlign: 'center' }}>
      <form className="form" style={{ marginRight: '1em', textAlign: 'right' }} onSubmit={handleSubmit}>
        <label>
          <input className="search-input" type="text" placeholder="Search Artists" value={userInput} onChange={handleChange} name="review" />
        </label>
      </form>
      <p style={{ fontSize: '150%', color: 'white', textShadow: '1px 1px 20px rgb(247, 238, 88)', padding: '0 15%' }}>DJs currently selling their music under the Room 1 record label. Click to view a list of their tracks to preview and purchase.</p>
      <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
        {djList.length ? filteredDjList.length ? filteredDjList.map(dj => (
          <div key={i++}>
            <Link to={{ pathname: `/record-label/${dj.DJ.toLowerCase()}`, state: { dj } }} >
              <div >
                <DJCard dj={dj} />
              </div>
            </Link>
          </div>
        ))
          :
          djList.map(dj => (
            <div key={i--}>
              <Link to={{ pathname: `/record-label/${dj.DJ.toLowerCase()}`, state: { dj } }} >
                <div key={dj.Name}>
                  <DJCard dj={dj} />
                </div>
              </Link>
            </div>
          )) :
          <CircleLoader
            css="margin-top:30vh;"
            size={100}
            color={"yellow"}
          />
        }
      </div>
    </div>
  )
}

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DJCard from '../../components/DJCard/DJCard';
import apiService from '../../Services/apiService';
import './DJList.css'

export default function DJList () {

  const [userInput, setUserInput] = useState("");
  const [djList, setDjList] = useState([])
  const [filteredDjList, setFilteredDjList] = useState([]);

  let i = 0;
  useEffect(() => {
    const abortController = new AbortController();

    apiService.getDJs()
      .then(data => data)
      .then(djs => setDjList(djs['DnBDJs'].slice(1).sort((a, b) => a.DJ < b.DJ ? -1 : 1)));

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
    <div style={{ minHeight: '100vh', padding: "0.5em 3em 3em" }}>
      <form className="form" style={{ marginTop: '80px', marginRight: '1em', textAlign: 'right' }} onSubmit={handleSubmit}>
        <label>
          <input className="search-input" type="text" placeholder="Search" value={userInput} onChange={handleChange} name="review" />
        </label>
      </form>
      <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center' }}>
        {

          filteredDjList.length ? filteredDjList.map(dj => (
            <div key={i++}>
              <Link style={{ color: 'inherit' }} to={{ pathname: `/dj/${dj.DJ}`, state: { dj } }} >
                <div >
                  <DJCard dj={dj} />
                </div>
              </Link >
            </div>
          ))
            :
            djList.map(dj => (
              <div key={i--}>
                <Link style={{ color: 'inherit' }} to={{ pathname: `/dj/${dj.DJ}`, state: { dj } }} >
                  <div key={dj.Name}>
                    <DJCard dj={dj} />
                  </div>
                </Link >
              </div>
            ))}
      </div>
    </div>
  )
}

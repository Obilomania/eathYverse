import React, { useState, useEffect } from 'react'
import Navigation from '../Navigation/Navigation'
import universeVideo from '../../assets/universe.mp4'
import './Crypto.css'
import { FiArrowUpRight, FiArrowDownLeft } from 'react-icons/fi'
import axios from 'axios'


const Crypto = () => {
  const [data, setData] = useState();
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=16&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  console.log(data)
  if (!data) return null;

  return (
    <>
    <div className="App">
      <Navigation />
      <div className="weather__content">
        <video autoPlay loop muted id='video'>
          <source src={universeVideo} type="video/mp4" />
        </video>
      </div>
      <div className="featured">
        <h1>Top 15 Crypto and their update</h1>
        <div className="cards">
          {data.map((coins) => (
            <div className="card">
              <img src={coins.image} alt="pics" />
              <div>
                <h5>{coins.name}</h5>
                <p>${coins.current_price.toLocaleString()}</p>
                {coins.price_change_percentage_24h < 0 ? (
                  <span className='red'><FiArrowDownLeft />
                    {coins.price_change_percentage_24h.toFixed(2)}%
                  </span>
                ) : (
                  <span className='green'>
                    <FiArrowUpRight />
                    {coins.price_change_percentage_24h.toFixed(2)}%
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      
      </div>
    </>
  )
}

export default Crypto
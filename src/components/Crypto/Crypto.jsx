import React, { useState, useEffect } from 'react'
import Navigation from '../Navigation/Navigation'
import universeVideo from '../../assets/universe.mp4'
import './Crypto.css'
import { FiArrowUpRight, FiArrowDownLeft } from 'react-icons/fi'
import axios from 'axios'


const Crypto = () => {
  const [data, setData] = useState(null);
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
    <div className="app">
      <Navigation /> 
      <div className="weather__content">
        <video autoPlay loop muted id='video'>
          <source src={universeVideo} type="video/mp4" />
        </video>
      </div>
      <div className="featured">
        <div className="container">
          <div className="card">
            {/* <img src={BTC} alt="pics" /> */}
            <img src={data[0].image} alt="pics" />
           </div>
            <div>
            <h5>{data[0].name}</h5>
            <p>${data[0].current_price.toLocaleString()}</p>
            {data[0].price_change_percentage_24h < 0 ? (
              <span className='red'><FiArrowDownLeft />
                {data[0].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className='green'>
                <FiArrowUpRight />
                  {data[0].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          
        </div>

      </div>


    </div>
  )
}

export default Crypto
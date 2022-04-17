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
          <h1>Top 15 Crypto and their update</h1>
        <div className="cards">
          <div className="card">
            <img src={data[0].image} alt="pics" />
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

          <div className="card">
            <img src={data[1].image} alt="pics" />
          <div>
            <h5>{data[1].name}</h5>
            <p>${data[1].current_price.toLocaleString()}</p>
            {data[1].price_change_percentage_24h < 0 ? (
              <span className='red'><FiArrowDownLeft />
                {data[1].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className='green'>
                <FiArrowUpRight />
                {data[1].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          </div>
          <div className="card">
            <img src={data[2].image} alt="pics" />
          <div>
            <h5>{data[2].name}</h5>
            <p>${data[2].current_price.toLocaleString()}</p>
            {data[2].price_change_percentage_24h < 0 ? (
              <span className='red'><FiArrowDownLeft />
                {data[2].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className='green'>
                <FiArrowUpRight />
                {data[2].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          </div>
          <div className="card">
            <img src={data[3].image} alt="pics" />
          <div>
            <h5>{data[3].name}</h5>
            <p>${data[3].current_price.toLocaleString()}</p>
            {data[3].price_change_percentage_24h < 0 ? (
              <span className='red'><FiArrowDownLeft />
                {data[3].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className='green'>
                <FiArrowUpRight />
                {data[3].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          </div>
          <div className="card">
            <img src={data[4].image} alt="pics" />
          <div>
            <h5>{data[4].name}</h5>
            <p>${data[4].current_price.toLocaleString()}</p>
            {data[4].price_change_percentage_24h < 0 ? (
              <span className='red'><FiArrowDownLeft />
                {data[4].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className='green'>
                <FiArrowUpRight />
                {data[4].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          </div>
          <div className="card">
            <img src={data[5].image} alt="pics" />
          <div>
            <h5>{data[5].name}</h5>
            <p>${data[5].current_price.toLocaleString()}</p>
            {data[5].price_change_percentage_24h < 0 ? (
              <span className='red'><FiArrowDownLeft />
                {data[5].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className='green'>
                <FiArrowUpRight />
                {data[5].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          </div>
          <div className="card">
            <img src={data[6].image} alt="pics" />
          <div>
            <h5>{data[6].name}</h5>
            <p>${data[6].current_price.toLocaleString()}</p>
            {data[6].price_change_percentage_24h < 0 ? (
              <span className='red'><FiArrowDownLeft />
                {data[6].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className='green'>
                <FiArrowUpRight />
                {data[6].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          </div>
          <div className="card">
            <img src={data[7].image} alt="pics" />
          <div>
            <h5>{data[7].name}</h5>
            <p>${data[7].current_price.toLocaleString()}</p>
            {data[7].price_change_percentage_24h < 0 ? (
              <span className='red'><FiArrowDownLeft />
                {data[7].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className='green'>
                <FiArrowUpRight />
                {data[7].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          </div>
          <div className="card">
            <img src={data[8].image} alt="pics" />
          <div>
            <h5>{data[8].name}</h5>
            <p>${data[8].current_price.toLocaleString()}</p>
            {data[8].price_change_percentage_24h < 0 ? (
              <span className='red'><FiArrowDownLeft />
                {data[8].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className='green'>
                <FiArrowUpRight />
                {data[8].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          </div>
          <div className="card">
            <img src={data[9].image} alt="pics" />
          <div>
            <h5>{data[9].name}</h5>
            <p>${data[9].current_price.toLocaleString()}</p>
            {data[9].price_change_percentage_24h < 0 ? (
              <span className='red'><FiArrowDownLeft />
                {data[9].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className='green'>
                <FiArrowUpRight />
                {data[9].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          </div>
          <div className="card">
            <img src={data[10].image} alt="pics" />
          <div>
            <h5>{data[10].name}</h5>
            <p>${data[10].current_price.toLocaleString()}</p>
            {data[10].price_change_percentage_24h < 0 ? (
              <span className='red'><FiArrowDownLeft />
                {data[10].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className='green'>
                <FiArrowUpRight />
                {data[10].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          </div>
          <div className="card">
            <img src={data[11].image} alt="pics" />
          <div>
            <h5>{data[11].name}</h5>
            <p>${data[11].current_price.toLocaleString()}</p>
            {data[11].price_change_percentage_24h < 0 ? (
              <span className='red'><FiArrowDownLeft />
                {data[11].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className='green'>
                <FiArrowUpRight />
                {data[11].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          </div>
          <div className="card">
            <img src={data[12].image} alt="pics" />
          <div>
            <h5>{data[12].name}</h5>
            <p>${data[12].current_price.toLocaleString()}</p>
            {data[12].price_change_percentage_24h < 0 ? (
              <span className='red'><FiArrowDownLeft />
                {data[12].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className='green'>
                <FiArrowUpRight />
                {data[12].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          </div>
          <div className="card">
            <img src={data[13].image} alt="pics" />
          <div>
            <h5>{data[13].name}</h5>
            <p>${data[13].current_price.toLocaleString()}</p>
            {data[13].price_change_percentage_24h < 0 ? (
              <span className='red'><FiArrowDownLeft />
                {data[13].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className='green'>
                <FiArrowUpRight />
                {data[13].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          </div>
          <div className="card">
            <img src={data[14].image} alt="pics" />
          <div>
            <h5>{data[14].name}</h5>
            <p>${data[14].current_price.toLocaleString()}</p>
            {data[14].price_change_percentage_24h < 0 ? (
              <span className='red'><FiArrowDownLeft />
                {data[14].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className='green'>
                <FiArrowUpRight />
                {data[14].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Crypto
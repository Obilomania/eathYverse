import React from 'react'
import { Link } from 'react-router-dom'
import './Video.css'
import universeVideo from '../../assets/universe.mp4'

const Video = () => {
  return (
    <>
      <div className="hero">
        <video autoPlay loop muted id='video'>
          <source src={universeVideo} type="video/mp4" />
        </video>
        <div className="content">
          <h1>Global Update</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
    </>
  )
}

export default Video
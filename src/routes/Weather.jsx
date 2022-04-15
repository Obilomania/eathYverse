import React from 'react'
import '../components/WeatherContent/WeatherContent.css'
import Navigation from '../components/Navigation/Navigation'
import WeatherContent from '../components/WeatherContent/WeatherContent'
import universeVideo from '../assets/universe.mp4'

const Weather = () => {
    return (
        <>
            <Navigation />
            <div className="weather__content">
                <video autoPlay loop muted id='video'>
                    <source src={universeVideo} type="video/mp4" />
                </video>
            </div>
            <WeatherContent />


        </>
    )
}

export default Weather
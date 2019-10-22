import React from 'react'

//css 
import './random-planet.css'

const RandomPlanet = () => {
    return (
        <div className='random-planet-container'>
            <img src="" alt=""/>
            <div className='planet-container'>
                <h1 className='planet-name'>Naboo</h1>
                <div className='planet-description'>
                    <ul className='description-list'>
                        <li>Population 4500000</li>
                        <li>Rotation Period 26</li>
                        <li>Diameter 12120</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RandomPlanet
import React, { Component } from 'react'

//css 
import './random-planet.css'

//services
import SwapiService from '../../services/swapi-service'

//components
import Spinner from '../spinner/spinner'
import ErrorIndicator from '../error-indicator/error-indicator'

export default class RandomPlanet extends Component {
    
    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    }

    constructor () {
        super()
        this.updatePlanet()
    }

    onPlanetLoaded = (planet) => {
        this.setState({ planet, loading: false })
    }

    onError = (err) => {
        this.setState({ error: true })
    }

    updatePlanet () {
        const id = Math.floor(Math.random() * (21 - 2) + 2)
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }

    render () {
        const {planet, loading, error} = this.state
        const hasData = !(loading || error)
        const errorIndicator = error ? <ErrorIndicator /> : null
        const spinner = loading && !error ? <Spinner/> : null
        const content = hasData ?  <PlanetView planet={planet}/> : null

        return (
            <div className='random-planet-container'>
                {errorIndicator}
                {spinner}
                {content}
            </div>
        )
    }
}
const PlanetView = ({ planet }) => {
    const { id, name, population, rotationPeriod, diameter } = planet

    return (
        <React.Fragment>
            <div className='planet-container'>
                <img className='planet-img' src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
                <div className='planet-description-container'>
                <h2 className='planet-name'>{name}</h2>
                <div className='planet-description'>
                    <ul className='description-list'>
                        <li>
                            <span className='term'>Population:</span>
                            <span>{population}</span>
                        </li>
                        <li>
                            <span className='term'>Rotation:</span>
                            <span>{rotationPeriod}</span>
                        </li>                            <li>
                            <span className='term'>Diameter:</span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </React.Fragment>
    )
}
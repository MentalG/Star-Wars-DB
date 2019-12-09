import React, { Component } from 'react'

//css 
import './person-details.css'

//services
import SwapiService from '../../services/swapi-service';

export default class PersonDetails extends Component {

    swapiService = new SwapiService()

    state = {
        person: null
    }

    componentDidMount() {
        this.updatePerson()
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson()
        }
    }

    updatePerson() {
        const { personId } = this.props

        if (!personId) {
            return
        }

        this.swapiService
        .getPerson(personId)
        .then((person) => {
            this.setState({ person })
        })
    }

    render () {
        const { person } = this.state 

        if (!person) {
            return <span>Select a person from a list</span>
        }

        const { id, name, gender,
                birthYear, eyeColor } = person

        return (
            <div className='person-details-container'>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt={name}/>
                <div className='person-details-description'>
                    <h1 className='person-name'>{name}</h1>
                    <div className='person-description'>
                        <ul className='description-person-list'>
                            <li>Gender: {gender}</li>
                            <li>Birthday Year: {birthYear}</li>
                            <li>EyeColor: {eyeColor}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
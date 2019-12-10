import React, { Component } from 'react'

//components
import Spinner from '../spinner/spinner';

//css 
import './person-details.css'

//services
import SwapiService from '../../services/swapi-service';

export default class PersonDetails extends Component {

    swapiService = new SwapiService()

    state = {
        person: null,
        loading: false,
    }

    componentDidMount () {
        this.updatePerson()
    }

    componentDidUpdate (prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.setState({ loading: true })
            this.updatePerson()
        }
    }

    updatePerson () {
        const { personId } = this.props

        if (!personId) {
            return
        }

        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({ person, loading: false })
            })
    }

    render () {
        const { person, loading } = this.state
        const content = (person && !loading) ? <PersonDetailsContainer person={person} /> : null
        const spinner = loading ? <Spinner /> : null
        const tip = person === null ? <SelectPerson /> : null

        return (
            <div className='person-details-container'>
                {tip}
                {spinner}
                {content}
            </div>
        )
    }
}

const SelectPerson = () => {
    return (
        <React.Fragment>
            <span className='select-person'>Select a person from a list</span>
        </React.Fragment>
    )
}

const PersonDetailsContainer = (person) => {
    const { id, name, gender,
        birthYear, eyeColor } = person.person

    return (
        <React.Fragment>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt={name} />
            <div className='person-details-description'>
                <h4 className='person-name'>{name}</h4>
                <div className='person-description'>
                    <ul className='description-person-list'>
                        <li>Gender: {gender}</li>
                        <li>Birthday Year: {birthYear}</li>
                        <li>EyeColor: {eyeColor}</li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}
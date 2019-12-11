import React, { Component } from 'react'

//components
import ItemList from '../item-list/item-list'
import PersonDetails from '../person-details/person-details'

//services
import SwapiService from '../../services/swapi-service'

//css
import './people-page.css'

export default class PeoplePage extends Component {

    swapiService = new SwapiService()

    state = {
        seletedPerson: null
    }

    onPersonSelected = (seletedPerson) => {
        this.setState({ seletedPerson })
    }

    render() {
        return (
            <div className='character-info-conrainer'>
            <ItemList 
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPeople} 
            renderItem={(item) => item.name}/>
            <PersonDetails personId={this.state.seletedPerson} />
          </div>
        )
    }

}
import React, { Component } from 'react'

//components
import ItemList from '../item-list/item-list'
import PersonDetails from '../person-details/person-details'

//css
import './people-page.css'


export default class PeoplePage extends Component {

    state = {
        seletedPerson: null
    }

    onPersonSelected = (seletedPerson) => {
        this.setState({ seletedPerson })
    }

    render() {
        return (
            <div className='character-info-conrainer'>
            <ItemList onItemSelected={this.onPersonSelected} />
            <PersonDetails personId={this.state.seletedPerson} />
          </div>
        )
    }

}
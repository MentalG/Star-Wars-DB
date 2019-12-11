import React, { Component } from 'react';

//components
import Header from '../header/header'
import ItemList from '../item-list/item-list';
import PeoplePage from '../people-page/people-page';
import RandomPlanet from '../random-planet/random-planet';
import PersonDetails from '../person-details/person-details';

//services
import SwapiService from '../../services/swapi-service';

//css
import './app.css'

export default class App extends Component {

  swapiService = new SwapiService()

  state = {

  }

  render () {
    return (
      <div className="app">
        <Header />
        <RandomPlanet />
        <PeoplePage />

        <div className='character-info-conrainer'>
          <ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPlanets} />
          <PersonDetails personId={this.state.seletedPerson} />
        </div>

      </div>
    )
  }
}
import React, {Component} from 'react';

//css
import './app.css'

//pages
import Header from '../header/header'
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';


export default class App extends Component {

  state = {
    seletedPerson: null
  }

  onPersonSelected = (id) => {
    this.setState({
      seletedPerson: id
    })
  }

  render() {
    return (
      <div className="app">
        <Header />
        <RandomPlanet />
        <div className='character-info-conrainer'>
          <ItemList onItemSelected={this.onPersonSelected}/>
          <PersonDetails personId={this.state.seletedPerson}/>
        </div>
      </div>
    )
  }
}
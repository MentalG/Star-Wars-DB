import React, { Component } from 'react';

//css
import './app.css'

//components
import Header from '../header/header'
import RandomPlanet from '../random-planet/random-planet';
import PeoplePage from '../people-page/people-page';

export default class App extends Component {
  render () {
    return (
      <div className="app">
        <Header />
        <RandomPlanet />
        <PeoplePage />
      </div>
    )
  }
}
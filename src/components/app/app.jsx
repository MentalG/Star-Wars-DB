import React from 'react';

//css
import './app.css'

//pages
import Header from '../header/header'
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';


function App () {
   return (
    <div className="app">
      <Header />
      <RandomPlanet />
      <div className='character-info-conrainer'>
        <ItemList />
        <PersonDetails />
      </div>
    </div>
  );
}

export default App;

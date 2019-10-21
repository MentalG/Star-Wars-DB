import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

//services
import SwapiService from './services/swapi-service'

const swapi = new SwapiService();

swapi.getAllPeople().then((people) => {
    people.forEach((person) => {
        console.log(person);
    });
})

swapi.getPerson(3).then((person) => {
    console.log(person);
})



ReactDOM.render(<App />, document.getElementById('root'));
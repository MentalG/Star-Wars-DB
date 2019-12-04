import React, {Component} from 'react'

//css 
import './item-list.css'
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';

export default class ItemList extends Component {

    swapiService = new SwapiService()

    state = {
        peopleList: null
    }

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList
                })
            })
    }

    render () {
        const { peopleList } = this.state

        if (!peopleList) {
            return <Spinner />
        }

        return(
            <ul className='characters-list'>
               <li>Luke Skywalker (19BBY)</li> 
               <li>C-3PO (112BBY)</li> 
               <li>R2-D2 (33BBY)</li> 
               <li>Darth Vader (41.9BBY)</li> 
               <li>Leia Organd(19BBY)</li> 
            </ul>
        )
    }
}
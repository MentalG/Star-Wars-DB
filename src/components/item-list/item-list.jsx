import React, { Component } from 'react'

//components
import Spinner from '../spinner/spinner';

//css 
import './item-list.css'

export default class ItemList extends Component {

    state = {
        itemList: null
    }

    componentDidMount () {
        const { getData } = this.props

        getData()
            .then((itemList) => {
                console.log(itemList);
                this.setState({
                    itemList
                })
            })
    }

    renderItems (arr) {
        return arr.map(( item ) => {
            const { id, name } = item
            const label = this.props.renderItem(item)
            
            return (
                <li key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </li>
            )
        })
    }

    render () {
        const { itemList } = this.state

        if (!itemList) {
            return <Spinner />
        }

        const items = this.renderItems(itemList)

        return <ul className='characters-list'>{items}</ul> 
    }
}
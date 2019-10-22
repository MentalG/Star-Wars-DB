import React from 'react'

//css 
import './item-list.css'

const ItemList = () => {
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

export default ItemList
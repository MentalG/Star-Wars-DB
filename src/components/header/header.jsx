import React from 'react'

//css
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <h2 className='logo'>StarWars DB</h2>
            <ul className='navbar'>
                <li>People</li>
                <li>Planets</li>
                <li>Starships</li>
            </ul>
        </div>
    )
}

export default Header
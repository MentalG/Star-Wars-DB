import React from 'react'

//css 
import './person-details.css'

const PersonDetails = () => {
    return(
        <div className='person-details-container'>
            <img src="" alt=""/>
            <div className='person-details-description'>
            <h1 className='person-name'>Naboo</h1>
                <div className='person-description'>
                    <ul className='description-person-list'>
                        <li>Population 4500000</li>
                        <li>Rotation Period 26</li>
                        <li>Diameter 12120</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PersonDetails


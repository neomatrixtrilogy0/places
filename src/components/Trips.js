import React from 'react'
import Trip from './Trip'

const Trips = ({ trips, removeTrip }) => {
    return (
        <div>
            <div className="title">
                <h2>Our Trips</h2>
                <div className="underline"></div>
            </div>
            <div>
                {trips.map(trip => {
                    return <Trip key={trip.id} {...trip} removeTrip={removeTrip}/>
                })}
            </div>
        </div>
    )
}

export default Trips

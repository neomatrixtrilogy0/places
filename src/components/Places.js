import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Trips from './Trips'

const url = "https://course-api.com/react-tours-project";

const Places = () => {
  const [loading, setLoading] = useState(true);
  const [trips, setTrips] = useState([]);

  const removeTrip = id => {
      const newTrip = trips.filter(trip => trip.id !== id)
      setTrips(newTrip)
  }

  const fetchTrips = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const trips = await response.json();
      setLoading(false);
      setTrips(trips);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (trips.length === 0) {
      return (
          <div>
              <div className="title">
                  <h2>No Tours Left</h2>
                  <button onClick={fetchTrips} className='btn'></button>
              </div>
          </div>
      )
  }

  return (
    <div className="main">
      <Trips trips={trips} removeTrip={removeTrip}/>
    </div>
  );
};

export default Places;

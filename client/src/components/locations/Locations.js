import { useState, useEffect } from 'react';
import axios from 'axios';

const Locations = ({ userId }) => {
  const [locations, setLocations] = useState([])

  useEffect( () => {
    axios.get(`/api/users/${userId}/locations`)
      .then( res => {
        setLocations(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  const addLocation = (location) => {
    axios.post(`/api/users/${userId}/locations`, { location })
      .then(res => {
        setLocations([...locations, res.data])
      })
      .catch( err => console.log(err))
  }

  const updateLocation = (id, location) => {
    axios.put(`/api/user/${userId}/locations/${id}`, { location })
      .then( res => {
        let updatedLocations = locations.map( l => {
          if (l.id === id) {
            return res.data
          }
          return l
        })
        setLocations(updatedLocations)
      })
      .catch( err => console.log(err))
  }

  const deleteLocation = (id) => {
    axios.delete(`/api/users/${userId}/locations/${id}`)
      .then( res => {
        setLocations( locations.filter( l => l.id !== id))
      })
      .catch( err => console.log(err))
  }

  return (
    <>
 <LocationForm addLocation={addLocation} />
      <LocationList 
        locations={locations} 
        deleteLocation={deleteLocation}
        updateLocation={updateLocation}
      />
    </>
  )
}

export default Locations;
import { useState, useEffect } from 'react';

const LocationForm = ({ addLocation, id, state, city, complete, updateLocation, setEdit }) => {
  const [location, setLocation] = useState({ state: "", city: "" })

  useEffect( () => {
    if (id) {
      setLocation({ state, city })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateLocation(id, location)
      setEdit(false)
    } else {
      addLocation(location)
    }
    setLocation({ state: "", city: "" })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          name="state"
          value={location.state}
          onChange={(e) => setLocation({...location, state: e.target.value })}

          required
          placeholder="State"
        />
        <input
          type="checkbox"
          name="complete"
          value={location.complete}
          onChange={(e) => setLocation({...location, complete: e.target.value})}
          checked={location.complete}
        />
         <input 
          name="city"
          value={location.city}
          onChange={(e) => setLocation({...location, state: e.target.value })}

          required
          placeholder="City"
        />
        <input
          type="checkbox"
          name="complete"
          value={location.complete}
          onChange={(e) => setLocation({...location, complete: e.target.value})}
          checked={location.complete}
        />

        <button type="submit">Submit</button>
      </form>

    </>
  )
}

export default LocationForm;
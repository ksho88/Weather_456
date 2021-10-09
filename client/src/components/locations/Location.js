import { useState } from 'react';
import LocationForm from './LocationForm';
import Locations from '../locations/Locations';

const Location = ({ id, state, city }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <li>
        {state, city}
        <br />
        Complete: { complete ? "Complete" : "Not Complete" }
        {
          editing ?
          <>
            <LocationForm
              id={id}
              state={state}
              complete={complete}
              updateLocation={updateLocation}
              setEdit={setEdit}
            />
             <LocationForm
              id={id}
              city={city}
              complete={complete}
              updateLocation={updateLocation}
              setEdit={setEdit}
            />
          </>
          :
          <button onClick={() => setEdit(true)}>Edit</button>
        }
        <button onClick={() => deleteLocation(id)}>Delete Location</button>
      </li>
      <Comments locationId={id} />
    </>
  )
}

export default Location;
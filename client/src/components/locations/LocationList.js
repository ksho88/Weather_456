import Location from './Location';

const LocationList = ({ locations, deleteLocation, updateLocation }) => {
  return (
    <>
      <ul>
        {
          locations.map( t => 
            <Location 
              {...l} 
              deleteLocation={deleteLocation} 
              updateLocation={updateLocation}
            />
          )
        }
      </ul>
    </>
  )
}

export default LocationList;
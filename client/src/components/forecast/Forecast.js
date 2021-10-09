import { useState } from 'react';
import ForecastForm from './ForecastForm';
import Days from '../days/Days';

const Forecast = ({ rain, snow, sunshine, wind, deleteForecast, updateForecast }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <li>
        {rain}
        <br />
        {snow} 
        <br />
        {sunshine} 
        <br />
        {wind}
        { 
          editing ?
          <>
            <ForecastForm
              rain={rain}
              snow={snow}
              sunshine={sunshine}
              wind={wind}
              updateTodo={updateForecast}
              setEdit={setEdit}
            />
          </>
          :
          <button onClick={() => setEdit(true)}>Edit</button>
        }
        <button onClick={() => deleteForecast(id)}>Delete</button>
      </li>
      <Days forecastId={id} />
    </>
  )
}

export default Forecast;
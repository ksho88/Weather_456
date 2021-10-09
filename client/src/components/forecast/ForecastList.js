import Forecast from './Forecast';

const ForecastList = ({ forecasts, deleteForecast, updateForecast }) => {
  return (
    <>
      <ul>
        {
          forecasts.map( t => 
            <Forecast 
              {...f} 
              deleteForecast={deleteForecast} 
              updateForecast={updateForecast}
            />
          )
        }
      </ul>
    </>
  )
}

export default ForecastList;
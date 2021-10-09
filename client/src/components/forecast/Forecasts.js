import { useState, useEffect } from 'react';
import axios from 'axios';
import ForecastList from './ForecastList';
import ForecastForm from './ForecastForm';

const Forecasts = () => {
  const [forecasts, setForecasts] = useState([])

  // before it mounts 
  useEffect( () => {
    // grab the todos from the db
    axios.get('/api/forecasts')
      .then( res => {
        // and set it to state
        setForecasts(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  // add todo
  const addForecast = (forecast) => {
    // add in the db
    // add in the state in the client 
    //  { todo: {title: "", complete: false}}
    axios.post('/api/forecasts', { forecast })
      .then( res => {
        setForecasts([...forecasts, res.data])
      })
      .catch( err => console.log(err))
  }

  // update todo
  const updateForecasts = (id, forecast) => {
    // update in the db
    //  { todo: {title: "", complete: false}}
    axios.put(`/api/forecasts/${id}`, { forecast })
      .then( res => {
        // update in the state in the client 
        const updatedForecasts = forecasts.map( f => {
          if (f.id == id) {
            return res.data
          }
          return t
        })
        setForecasts(updatedForecasts)
      })
      .catch( err => console.log(err))
  }


  // delete todo 
  const deleteForecast = (id) => {
    // delete in the db
    axios.delete(`/api/forecasts/${id}`)
      .then( res => {
        // delete in the state in the client 
        setForecasts(forecasts.filter( f => f.id !== id))
      })
      .catch( err => console.log(err))
  }

  return (
    <>
      <ForecastForm addForecast={addForecasts} />
      <ForecastList 
        forecasts={forecasts} 
        deleteForecast={deleteForecast}
        updateForecast={updateForecast}
      />
    </>
  )
}

export default Forecasts;
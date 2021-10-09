import { useState, useEffect } from 'react';

const ForecastForm = ({ addForecast, id, rain, snow, sunshine, wind, updateForecast, setEdit }) => {
  const [forecast, setForecast] = useState({ rain: "", snow: "", sunshine: "", wind: "" })

  useEffect( () => {
    if (id) {
      setForecast({ rain, snow, sunshine, wind })
      // setTodo({ title: title, complete: complete })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateForecast(id, forecast)
      setEdit(false)
    } else {
      addForecast(forecast)
    }
    setForecast({ rain, snow, sunshine, wind })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          name="rain"
          value={forecast.rain}
          onChange={(e) => setForecast({...forecast, rain: e.target.value })}

          required
          placeholder="Rain"
        />
        <input
          type="checkbox"
          name="complete"
          value={forecast.complete}
          onChange={(e) => setForecast({...forecast, complete: e.target.value})}
          checked={forecast.complete}
        />
        <input 
          name="snow"
          value={forecast.snow}
          onChange={(e) => setForecast({...forecast, snow: e.target.value })}

          required
          placeholder="Snow"
        />
        <input
          type="checkbox"
          name="complete"
          value={forecast.complete}
          onChange={(e) => setForecast({...forecast, complete: e.target.value})}
          checked={forecast.complete}
        />
        <input 
          name="sunshine"
          value={forecast.sunshine}
          onChange={(e) => setForecast({...forecast, sunshine: e.target.value })}

          required
          placeholder="Sunshine"
        />
        <input
          type="checkbox"
          name="complete"
          value={forecast.complete}
          onChange={(e) => setForecast({...forecast, complete: e.target.value})}
          checked={forecast.complete}
        />
        <input 
          name="wind"
          value={forecast.wind}
          onChange={(e) => setForecast({...forecast, wind: e.target.value })}

          required
          placeholder="Wind"
        />
        <input
          type="checkbox"
          name="complete"
          value={forecast.complete}
          onChange={(e) => setForecast({...forecast, complete: e.target.value})}
          checked={forecast.complete}
        />
        <button type="submit">Submit</button>
      </form>

    </>
  )
}

export default ForecastForm;
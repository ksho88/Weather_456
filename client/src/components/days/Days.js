import { useState, useEffect } from 'react';
import axios from 'axios';
import DayList from './DayList';
import DayForm from './DayForm';

const Days = () => {
  const [days, setDays] = useState([])

  // before it mounts 
  useEffect( () => {
    // grab the todos from the db
    axios.get('/api/days')
      .then( res => {
        // and set it to state
        setDays(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  // add todo
  const addDay = (days) => {
    // add in the db
    // add in the state in the client 
    //  { todo: {title: "", complete: false}}
    axios.post('/api/Days', { day })
      .then( res => {
        setDays([...days, res.data])
      })
      .catch( err => console.log(err))
  }

  const updateDay = (id, day) => {
    // update in the db
    //  { todo: {title: "", complete: false}}
    axios.put(`/api/days/${id}`, { day })
      .then( res => {
        // update in the state in the client 
        const updatedDays = days.map( d => {
          if (d.id == id) {
            return res.data
          }
          return d
        })
        setDays(updatedDays)
      })
      .catch( err => console.log(err))
  }


  // delete todo 
  const deleteDay = (id) => {
    // delete in the db
    axios.delete(`/api/days/${id}`)
      .then( res => {
        // delete in the state in the client 
        setDays(days.filter( t => t.id !== id))
      })
      .catch( err => console.log(err))
  }

  return (
    <>
      <DayForm addDay={addDay} />
      <DayList 
        days={days} 
        deleteDay={deleteDay}
        updateDay={updateDay}
      />
    </>
  )
}

export default Days;
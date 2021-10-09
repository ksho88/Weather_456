import { useState } from 'react';

const dayForm = ({ id, date_dat, time_hours, updateDay, setEdit }) => {
  const [day, setDay] = useState(false)

  useEffect( () => {
    if (id) {
      setDay({ date_dat,time_hours complete })
      // setTodo({ title: title, complete: complete })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateDay(id, day)
      setEdit(false)
    } else {
      addDay(day)
    }
    setDay({ date_dat: "", time_hours: "",complete: false })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          name="Date"
          value={day.date_dat}
          onChange={(e) => setday({...day, title: e.target.value })}

          required
          placeholder="Title"
        />
        <input
         name="Time"
          value={day.time_hours}
          onChange={(e) => setday({...day, complete: e.target.value})}
          checked={day.time_hours}
        />
        <button type="submit">Submit</button>
      </form>

    </>
  )
}

export default dayForm;
import { useState } from 'react';
import DayForm from './DayForm';
// import Forecastfrom '../forcast/Froecasts';

const Day = ({ id,date_dat, time_hours , complete, deleteDay, updateDay }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <li>
        {title}
        <br />
        Complete: { complete ? "Complete" : "Not Complete" }
        {
          editing ?
          <>
            <DayForm
              id={id}
              date_dat={date_dat}
              complete={complete}
              updateDAY={updateDay}
              setEdit={setEdit}
              time_hours={time_hours}
            />
          </>
          :
          <button onClick={() => setEdit(true)}>Edit</button>
        }
        <button onClick={() => deleteDay(id)}>Delete Day</button>
      </li>
      <Comments dayId={id} />
    </>
  )
}

export default Day;

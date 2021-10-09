import Day from './Day';

const DayList = ({ days, deleteDay, updateDay }) => {
  return (
    <>
      <ul>
        {
          days.map( d => 
            <Day
              {...D} 
              deleteday={deleteDay} 
              updateday={updateDay}
            />
          )
        }
      </ul>
    </>
  )
}

export default DayList;

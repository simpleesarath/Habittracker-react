import { ListGroup} from 'react-bootstrap'; // importing react bootstrap lib
import { useSelector } from 'react-redux';  // importing useselector hook
import HabitDetails from './HabitDetails';    // importing habit details component

const HabitDisplay = () => {
  const { habits } = useSelector((state) => state.allHabits)    //creating functional component
 
  return (
    <div className='mt-2'>
      
      {habits.map((habit, index) => (                       /*for mapping over habits from redux store*/
        
          <ListGroup.Item key={index} className='mb-3 rounded '>
            <p>
              <strong>{habit.title}</strong>&nbsp; :&nbsp; <i >{habit.description}</i>
            </p>

            <HabitDetails key={habit.title}  habit={habit} />
           
          </ListGroup.Item>
      
      ))}
    </div>
  )
}

export default HabitDisplay;    //exporting habitdisplay component

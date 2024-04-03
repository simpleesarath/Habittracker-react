import React from 'react';                                        //importing react elems,components,styles
import CreateHabit from './CreateHabit';
import { Row, Col, ListGroup, Button } from 'react-bootstrap';
import { deleteHabit } from '../features/habitsSlice';
import { useDispatch, useSelector } from 'react-redux';
import './overview.css';


const Overview = () => {                                    //initialization overview component
  const [modalShow, setModalShow] = React.useState(false)

  const dispatch = useDispatch()
  const { habits } = useSelector((state) => state.allHabits)


  // deleteHabit Handler
  const deleteHandler = (name) => {
    dispatch(deleteHabit(name))
  }

  return (
    <>
   
      <Row className='habit-list-head'>
      {/* <Col className='onMobile'> */}
          <h6> <i className='fa-regular fa-calendar-minus'>&nbsp;</i> Yours Habits List</h6>
      {/* </Col> */}
      </Row>
      <ListGroup >
        {habits.map((habit, index) => (
          <ListGroup.Item key={index} className='mb-1 rounded habit-container'>
            <Row className=' onhover'>
              <Col md={2} className='icons'>
                {' '}
                <i  className='fa-solid fa-o me-3 '></i>
              </Col>
              <Col md={8} className='habit-title'>{habit.title}</Col>     {/*  medium sized screens it 8colums out 12 cols avail in grid */ } 
              <Col md={1} className='icons'>                        {/*  medium sized screens it 1 colums out 12 cols avail in grid */ } 
                <i
                  className='fa-solid fa-trash '
                  style={{ fontSize: '16px' }}
                  onClick={() => deleteHandler(habit.title)}></i>   
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Row>
        <Col>
          <Button
            type='button'
            className='bg-primary mt-3 mobile'
            onClick={() => setModalShow(true)}>

            <i className='fa-solid fa-circle-plus add' ></i> &nbsp;&nbsp; New Habit
          </Button>
          <CreateHabit show={modalShow} onHide={() => setModalShow(false)} />
        </Col>
      </Row>
    
    </>
  )
}

export default Overview;   //export default Overview component

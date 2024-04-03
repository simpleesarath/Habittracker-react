import { useState } from 'react';                          //importing react elems,components,styles
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addHabit } from '../features/habitsSlice';
import { details } from '../features/habitsSlice';
import  '../index.css';


const CreateHabit = (props) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  // handle new habits
  const AddHabitHandler = () => {
    dispatch(addHabit({ title, description, details }))
    props.onHide()
  }

  return (
                                                                                
    <Modal {...props} size='sm' aria-labelledby='contained-modal-title-center' centered>   {/*creating Modal*/} 
      <Modal.Dialog className='modal-sm'>
        <Modal.Body >
          <Form onSubmit={() => AddHabitHandler}>
            <Form.Group controlId='title'>
              <Form.Label>Habit Title</Form.Label>
              <Form.Control
                type='text'
                placeholder='Add title'
                value={title}
                autoFocus={true}
                required={true}
                onChange={(e) => setTitle(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group  controlId='description'>
              <Form.Label >Describe it </Form.Label>
              <Form.Control
                type='text'
                placeholder='short description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}></Form.Control>
            </Form.Group>

            <Modal.Footer >
              <Button style={{backgroundColor:'darkblue'}} onClick={() => AddHabitHandler()}>Add Habit</Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  )
}

export default CreateHabit;   //exporting createHabit component

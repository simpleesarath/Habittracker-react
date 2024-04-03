import { useEffect, useState } from 'react';            //importing usestate ,useeffect hooks
import Header from './components/Header';             //impotering header component
import Overview from './components/Overview';         //impotering overview component
import HabitDisplay from './components/HabitDisplay';  //impotereing habit display component
import { Row, Col, Container } from 'react-bootstrap';  //importing react bootstrap 
import Typed from 'typed.js';                           //importing react typed library 

function App() {                                           //creating a functional based component 
  const [isFirstRender, setIsFirstRender] = useState(true)  //initializing a true value 

  useEffect(() => {
    if (isFirstRender) {
      const typed = new Typed('.tag', {          //to implement new instance of typed.js
        strings: [
          "quality is not a act,its a Habit",
          `"Let's start by tracking a your habit for next seven days."`,
          "It's time to develop good habits.",
          `'Habits change into character.'`,
          "Winners makes habit of manufacturing their own expectations in advance of the event!"
        ],
        startDelay: 1000,                 
        typeSpeed: 10,
        backSpeed: 12,
        loop: false,
      })

      return () => {
        typed.destroy()                   //to empty the effect 
      }
    }

    setIsFirstRender(false)
  }, [isFirstRender])

  return (
    <>
      <Header />              {/*using a header component */ }
      <Container >            {/*wrapping the 2 components inside this container*/ }
        <h2 className='text-light d-flex mt-5 justify-content-center tag'>

        </h2>
        <Row className='mt-3' >                 {/*with margin top 3 scales */}
              <Col md={8}>                        {/*  medium sized screens it 8 colums out 12 cols avail in grid */ } 
                  <HabitDisplay />              {/* using  HabitDetails Component*/}   
              </Col>

              <Col md={3} >                   {/*  medium sized screens it 3 colums out 12 cols avail in grid */ } 
                  <Overview />                {/* using Overview component */ }  
              </Col>
        </Row>
       
      </Container>
    </>
  )
}

export default App;                             /*exporting app component */
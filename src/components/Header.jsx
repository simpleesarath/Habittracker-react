import { Nav, Container } from 'react-bootstrap';
// import '../index.css';
// Habit-tracker\habit-tracker\src\index.css

const Header = () => {
  const date = new Date()
  return (
    <Nav className='bg p-2' id="navam">
      <Container className='d-flex justify-content-between align-items-center' id="navi">
        <h3 className='nav-head'>HABIT TRACKER</h3>
        <span className='day' >{date.toDateString()}</span>
      </Container>
    </Nav>
  )
}

export default Header;

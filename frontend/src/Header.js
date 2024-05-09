import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (<>

    <Navbar expand="lg" className="navbar text-center">
      <Container>
        <Nav className="col-md-4 ms-auto">
          <Navbar><Link to='/'>Home</Link></Navbar>
          <Navbar><Link to='/Create'>Create Post</Link></Navbar>
          <Navbar><Link to='/Update'>Update Post</Link></Navbar>
          <Navbar><Link to='/Register'>Register</Link></Navbar>
          <Navbar><Link to='/Login'>Login</Link></Navbar>
        </Nav>
      </Container>
    </Navbar>
  </>)
}
export default Header;
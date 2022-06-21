import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Container from './../../node_modules/react-bootstrap/esm/Container';
import logo from '../img/logo.png';
import '../App.css';
//b3. tạo navbar găn link trỏ đến các pages
const Header = () => {
	return (
	<Navbar id='bgHeader' sticky='top' variant='dark' expand="md">
  	<Container>
    <img src={logo} alt='img' id='abc' width={35} height={35} />
    <Navbar.Brand style={{ color:'white', fontFamily:'cursive'}} as={Link} to="/">
        QaLi
    </Navbar.Brand>
    <Navbar.Toggle style={{ backgroundColor:'green'}} aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={NavLink} style={{ color:'white'}} to="/products">Sản Phẩm</Nav.Link>
        <Nav.Link as={NavLink} style={{ color:'white'}} to="/">Tin Tức</Nav.Link>
        <Nav.Link as={NavLink} style={{ color:'white'}} to="/">Trợ Giúp</Nav.Link>
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
            </NavDropdown> */}
      </Nav>
	  <Nav>
	  	<Nav.Link href='/#' style={{ color:'white'}}>Chào mừng bạn<strong>...</strong></Nav.Link>
    <Nav.Link style={{ color:'white'}}>
      <i className="bi bi-person-circle"></i>
		</Nav.Link>
		<Nav.Link className='cart' style={{ color:'white'}} >
      <span>
			  <i className='bi bi-cart3'></i>
      </span>
      <span>0</span>
		</Nav.Link>
	  </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
}
 
export default Header;
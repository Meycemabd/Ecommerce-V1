import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";





export default class NavBar extends Component {
  constructor(props){
    super(props);
    
  }
  search(str){
    this.props.setState({
      searchQuerry: str
    })
  }
  render() {
    return (
      <Navbar expand="lg" className="navbar navbar-dark bg-info">
      <Container fluid>
        <Navbar.Brand href="#">ShopExpress</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto" style={{ maxHeight: '100px' }} navbarScroll>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Looking for..."
                className="d-flex justify-content-center"
                onChange={(eve)=>{
                  this.search(eve.target.value)
                }}
                aria-label="Search"
              />
              <Button variant="outline-dark">
                <IoIosSearch size={30} />
              </Button>
            </Form>

            <NavDropdown title="CATEGORIES" id="navbarScrollingDropdown" className='d-flex align-items-center me-3'> 
              <NavDropdown.Item href="#action3">Smartphones</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Notebooks</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Accessories</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#action2"><FaShoppingCart size={30} color='white' onClick={()=>{
             this.props.changeView("cart")
            }}/>
           </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
  }
}


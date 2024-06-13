import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../assets/img/Mytalu_Logo.png";
import { useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

export const Header = () => {
  const navigate = useNavigate();

  const logMeOut = () => {
    sessionStorage.removeItem('accessJWT');
    navigate("/");
  };

  return (
    <Navbar collapseOnSelect bg="info"  variant="dark" expand="md">
        <Navbar.Brand>
            <img src={logo} alt="logo" width="50px"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" >
            <LinkContainer to="home"><Nav.Link >Home</Nav.Link></LinkContainer>
            <LinkContainer to="dashboard"><Nav.Link>Dashboard</Nav.Link></LinkContainer>
            <LinkContainer to="record-list"><Nav.Link>Records</Nav.Link></LinkContainer>
            <NavDropdown title="New Record" id="basic-nav-dropdown">
              <LinkContainer to="add-record"><NavDropdown.Item >Add New Record</NavDropdown.Item></LinkContainer>
              <LinkContainer to=""><NavDropdown.Item> Import A Record</NavDropdown.Item></LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to=""><NavDropdown.Item >Delete Record </NavDropdown.Item></LinkContainer>
            </NavDropdown>
            <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
};

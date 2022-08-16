import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import airPlane from '../../assets/images/airplane.gif'

// Main header component
function Header() {
  // States
  const [show, setShow] = useState(true)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // Assign location to a variable
  const location = useLocation()

  // Destructuring path name from location
  const { pathname } = location

  // Get the name of the path in an array
  const splitLocation = pathname.split('/')

  // Handlers
  function handleModalShow() {
    setShow(true)
  }

  // Handle search buttn click
  function handleSearchBtnClick() {
    let searchBtn = document.querySelector('.search-btn')
    let searchOverlay = document.querySelector('.search-overlay')

    searchBtn.addEventListener('click', function () {
      searchOverlay.classList.add('search-overlay--active')
      document.body.classList.remove('body-no-scroll')
    })
  }

  return (
    <>
      <Navbar
        fixed="top"
        expand="lg"
        bg="light"
        variant="light"
        className="px-3 py-3"
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <div className="navbar-brand__box">
              <img src={logo} alt="Filo logo" />
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-menu" />
          <Navbar.Collapse id="main-menu">
            <Nav className="mx-auto">
              <Nav.Item
                className={`${splitLocation[1] === '' ? 'active' : ''}`}
              >
                <Nav.Link as={Link} to="/">
                  الصفحة الرئيسية<span className="sr-only">(current)</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item
                className={`${
                  splitLocation[1] === 'cultural-stories' ? 'active' : ''
                }`}
              >
                <Nav.Link as={Link} to="/cultural-stories">
                  قصص حضارية
                </Nav.Link>
              </Nav.Item>
              <Nav.Item
                className={`${
                  splitLocation[1] === 'multi-track-stories' ? 'active' : ''
                }`}
              >
                <Nav.Link as={Link} to="/multi-track-stories">
                  قصص متعددة المسارات
                </Nav.Link>
              </Nav.Item>
              <Nav.Item
                className={`${splitLocation[1] === 'contact' ? 'active' : ''}`}
              >
                <Nav.Link as={Link} to="/contact">
                  تواصل معنا
                </Nav.Link>
              </Nav.Item>
              <Nav.Item
                className={`${splitLocation[1] === 'about' ? 'active' : ''}`}
              >
                <Nav.Link as={Link} to="/about">
                  من نحن
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <div className="navbar__actions">
              <i
                className="fas fa-search search-btn"
                onClick={handleSearchBtnClick}
              ></i>
              <i className="fas fa-bell"></i>
              <i className="fas fa-user" onClick={handleModalShow}></i>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={airPlane} alt="airplane" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleShow}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Header

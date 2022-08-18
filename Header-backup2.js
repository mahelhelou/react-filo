import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import airPlane from '../../assets/images/airplane.gif'

// Main header component
function Header() {
  /**
   * States
   * showModal state
   */
  const [show, setShow] = useState(false)

  /**
   * Assign location to a variable
   * Destructuring path name from location
   * Get the name of the path in an array
   */
  const location = useLocation()
  const { pathname } = location
  const splitLocation = pathname.split('/')

  /**
   * Handlers:
   * 1. Show login modal
   * 2. Close login
   * 3. Show signup modal
   * 4. Close signup modal
   */
  function handleLoginModalShow() {
    setShow(true)
  }

  function handleLoginModalClose() {
    setShow(false)
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
              <i className="fas fa-user" onClick={handleLoginModalShow}></i>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} animation centered>
        <Modal.Body>
          <Button className="close" onClick={handleLoginModalClose}>
            <span aria-hidden="true">&times;</span>
          </Button>

          <img src={airPlane} alt="airplane" />
          <div className="form-title text-center">
            <h4 className="text-center mb-3">تسجيل دخول</h4>
            <div className="d-flex flex-column text-center">
              <form>
                <div className="form-group">
                  <input
                    id="email1"
                    type="email"
                    placeholder="اسم المستخدم أو البريد الإلكتروني"
                  />
                </div>
                <div className="form-group">
                  <input
                    id="password"
                    type="password"
                    placeholder="كلمة المرور"
                  />
                </div>
                <Button className="btn btn-block btn11 mt-1" type="submit">
                  تسجيل الدخول
                </Button>
                <p className="mt-3">
                  اذا لم يكن لديك حساب أنشئ{' '}
                  <Button className="btn btn-link">حساب جديد</Button>
                </p>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={show} animation aria-labelledby="login-form-label" centered>
        <Modal.Body>
          <Button className="close" onClick={handleLoginModalClose}>
            <span aria-hidden="true">&times;</span>
          </Button>

          <img src={airPlane} alt="airplane" />
          <div className="form-title text-center">
            <h4 className="text-center mb-3">تسجيل دخول</h4>
            <div className="d-flex flex-column text-center">
              <form>
                <div className="form-group">
                  <input
                    id="email1"
                    type="email"
                    placeholder="اسم المستخدم أو البريد الإلكتروني"
                  />
                </div>
                <div className="form-group">
                  <input
                    id="password"
                    type="password"
                    placeholder="كلمة المرور"
                  />
                </div>
                <Button className=" btn btn-block btn11 mt-1" type="button">
                  <Link>تسجيل الدخول</Link>
                </Button>
                <p className="mt-3">
                  اذا لم يكن لديك حساب أنشئ{' '}
                  <Link href="" data-toggle="modal" data-target="#sign-form">
                    حساب جديد
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Header

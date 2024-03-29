import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import airPlane from '../../assets/images/airplane.gif'

// Main header component
function Header() {
  /**
   * States
   * 1. Login modal state
   * 2. Sign up modal
   */
  const [loginModalShow, setLoginModalShow] = useState(false)
  const [signUpModalShow, setSignUpModalShow] = useState(false)

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
   * 3. Show singe up modal
   * 4. Close singe up modal
   * 5. Open search overlay
   * 6. Close search overlay
   * 7. Redirect to search results page
   */
  function handleLoginModalShow() {
    setLoginModalShow(true)
    setSignUpModalShow(false)
  }

  function handleLoginModalClose() {
    setLoginModalShow(false)
  }

  function handleSignUpModalShow() {
    setLoginModalShow(false)
    setSignUpModalShow(true)
  }

  function handleSignUpModalClose() {
    setSignUpModalShow(false)
  }

  function handleSearchOverlayOpen() {
    document
      .querySelector('.search-overlay')
      .classList.add('search-overlay--active')
    document.body.classList.add('body-no-scroll')
  }

  function handleSearchOverlayClose() {
    document
      .querySelector('.search-overlay')
      .classList.remove('search-overlay--active')
    document.body.classList.remove('body-no-scroll')
  }

  const navigate = useNavigate()

  function handleSearchFormSubmit(e) {
    e.preventDefault()

    navigate('/profile')
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
                onClick={handleSearchOverlayOpen}
              ></i>
              <i className="fas fa-bell"></i>
              <i className="fas fa-user" onClick={handleLoginModalShow}></i>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={loginModalShow} animation centered>
        <Modal.Body>
          <Button className="close">
            <span aria-hidden="true" onClick={handleLoginModalClose}>
              &times;
            </span>
          </Button>
          <img src={airPlane} alt="Air Plane" />
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
                <Button className="btn btn-block btn11 mt-1" type="button">
                  تسجيل الدخول
                </Button>
                <p className="mt-3">
                  اذا لم يكن لديك حساب أنشئ{' '}
                  <Link to="" onClick={handleSignUpModalShow}>
                    حساب جديد
                  </Link>
                </p>
              </form>
            </div>
          </div>{' '}
        </Modal.Body>
      </Modal>

      <Modal show={signUpModalShow} animation centered>
        <Modal.Body>
          <Button className="close">
            <span aria-hidden="true" onClick={handleSignUpModalClose}>
              &times;
            </span>
          </Button>
          <img src={airPlane} alt="Air Plane" />
          <div class="form-title text-center">
            <h4 class="text-center mb-3">حساب جديد</h4>
            <div class="d-flex flex-column text-center">
              <form>
                <div class="form-group">
                  <input id="name1" type="text" placeholder="الاسم" />
                </div>
                <div class="form-group">
                  <input
                    id="email1"
                    type="email"
                    placeholder="اسم المستخدم أو البريد الإلكتروني"
                  />
                </div>
                <div class="form-group">
                  <input id="date1" type="text" placeholder="تاريخ الميلاد" />
                </div>
                <div class="form-group">
                  <input
                    id="password"
                    type="password"
                    placeholder="كلمة المرور"
                  />
                </div>
                <div class="form-check mb-3 pr-3 float-right">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    تذكرني
                  </label>
                </div>
                <Button className="btn btn-block btn11 mt-1" type="button">
                  تسجيل جديد
                </Button>
                <p class="mt-3">
                  هل لديك حساب{' '}
                  <Link to="" onClick={handleLoginModalShow}>
                    تسجيل دخول
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <div className="search-overlay">
        <div className="search-overlay__content">
          <h2 className="mb-5">
            ماذا تريد أن تشاهد على&nbsp;
            <strong className="font-weight-bold text-danger">فيلو؟</strong>
          </h2>
          <div className="search-overlay__search-input">
            <form onSubmit={handleSearchFormSubmit}>
              <div className="input-group mt-3">
                <input
                  className="form-control"
                  type="search"
                  placeholder="ابحث في فيلو..."
                  name="s"
                  autoFocus
                />
                <div className="input-group-append">
                  <div className="input-group-text" type="submit">
                    <i className="fas fa-search"></i>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <i
            className="fas fa-times-circle search-overlay__close"
            aria-hidden="true"
            onClick={handleSearchOverlayClose}
          ></i>
        </div>
      </div>
    </>
  )
}

export default Header

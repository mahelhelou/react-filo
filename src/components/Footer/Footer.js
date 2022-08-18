import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer ">
      <div className="footer_black">
        <Container>
          <Row>
            <Col sm={12} md={4}>
              <h3>تسجيل الدخول في الموقع </h3>
              <div className="mt-3">
                <div className="offset-md-2">
                  <form className="subscribeForm" action="">
                    <div className="form-group">
                      <button className="btn subscribeBtn">تسجيل الدخول</button>
                      <input
                        type="email"
                        className="form-control subscribeInput"
                        placeholder="االبريد الالكتروني"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="footer-menu text-center">
                <ul>
                  <li>
                    <Link to="/about">من نحن</Link>
                  </li>
                  <li>
                    <Link to="/contact">تواصل معنا</Link>
                  </li>
                  <li>
                    <Link to="/privacy">شروط</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={5}>
              <Row className="end-page">
                <Col md={3}>
                  <div className="footer-menu text-center">
                    <ul>
                      <li>
                        <span>palestine,Gaza</span>
                      </li>
                      <li>
                        <span>+44 345 678 903</span>
                      </li>
                      <li>
                        <span>filo@gmail.com</span>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md={2}>
                  <div className="footer-menu text-center">
                    <ul>
                      <li>
                        <a href="https://instagram.com">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://facebook.com">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  )
}

export default Footer

import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  function handleSearchClose() {
    let searchClose = document.querySelector('.search-overlay__close')
    let searchOverlay = document.querySelector('.search-overlay')

    searchClose.addEventListener('click', function () {
      searchOverlay.classList.remove('search-overlay--active')
      document.body.classList.add('body-no-scroll')
    })
  }

  return (
    <>
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
                        <button className="btn subscribeBtn">
                          تسجيل الدخول
                        </button>
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

      <div class="search-overlay">
        <div class="search-overlay__content">
          <h2 class="mb-5">
            ماذا تريد أن تشاهد على&nbsp;
            <strong class="font-weight-bold text-danger">فيلو؟</strong>
          </h2>
          <div class="search-overlay__search-input">
            <form>
              <div class="input-group mt-3">
                <input
                  class="form-control"
                  type="search"
                  placeholder="ابحث في فيلو..."
                  name="s"
                  autofocus
                />
                <div class="input-group-append">
                  <div class="input-group-text" type="submit">
                    <i class="fas fa-search"></i>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <i
            class="fas fa-times-circle search-overlay__close"
            aria-hidden="true"
            onClick={handleSearchClose}
          ></i>
        </div>
      </div>
    </>
  )
}

export default Footer

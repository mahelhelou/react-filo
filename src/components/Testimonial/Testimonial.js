import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

import divider from '../../assets/images/divider.png'
import child1 from '../../assets/images/child1.png'

function Testimonial() {
  return (
    <section id="testimonial-area">
      <div className="container childs">
        <div className="section-title mb-3">آراء مستخدمينا الصغار</div>
        <div className="section-divider">
          <img className="testimonials__divider" src={divider} alt="Divider" />
        </div>
        <OwlCarousel className="owl-theme" rtlClass="owl-rtl" autoplay loop>
          <div className="item">
            <div className="testi-wrap">
              <div
                className="client-single active position-1"
                data-position="position-1"
              >
                <div className="client-img">
                  <img src={child1} alt="" />
                </div>
                <div className="client-info">
                  <p>
                    أنا وليد من مدينة اللد المحتلة ولقد شاهدت قصة مدينة اللد{' '}
                  </p>
                  <h3>هيا اللولو</h3>
                  <p>
                    <a>5 سنوات</a>
                  </p>
                </div>
              </div>

              <div
                className="client-single inactive position-2"
                data-position="position-2"
              >
                <div className="client-img">
                  <img src={child1} alt="" />
                </div>
                <div className="client-info">
                  <p>
                    أنا وليد من مدينة اللد المحتلة ولقد شاهدت قصة مدينة اللد{' '}
                  </p>
                  <h3>هيا اللولو</h3>
                  <p>
                    <a>5 سنوات</a>
                  </p>
                </div>
              </div>

              <div
                className="client-single inactive position-3"
                data-position="position-3"
              >
                <div className="client-img">
                  <img src={child1} alt="" />
                </div>
                <div className="client-info">
                  <p>
                    أنا وليد من مدينة اللد المحتلة ولقد شاهدت قصة مدينة اللد{' '}
                  </p>
                  <h3>هيا اللولو</h3>
                  <p>
                    <a>5 سنوات</a>
                  </p>
                </div>
              </div>

              <div
                className="client-single inactive position-4"
                data-position="position-4"
              >
                <div className="client-img">
                  <img src={child1} alt="" />
                </div>
                <div className="client-info">
                  <p>
                    أنا وليد من مدينة اللد المحتلة ولقد شاهدت قصة مدينة اللد{' '}
                  </p>
                  <h3>هيا اللولو</h3>
                  <p>
                    <a>5 سنوات</a>
                  </p>
                </div>
              </div>

              <div
                className="client-single inactive position-5"
                data-position="position-5"
              >
                <div className="client-img">
                  <img src={child1} alt="" />
                </div>
                <div className="client-info">
                  <p>
                    أنا وليد من مدينة اللد المحتلة ولقد شاهدت قصة مدينة اللد{' '}
                  </p>
                  <h3>هيا اللولو</h3>
                  <p>
                    <a>5 سنوات</a>
                  </p>
                </div>
              </div>

              <div
                className="client-single inactive position-6"
                data-position="position-6"
              >
                <div className="client-img">
                  <img src={child1} alt="" />
                </div>
                <div className="client-info">
                  <p>
                    أنا وليد من مدينة اللد المحتلة ولقد شاهدت قصة مدينة اللد{' '}
                  </p>
                  <h3>هيا اللولو</h3>
                  <p>
                    <a>5 سنوات</a>
                  </p>
                </div>
              </div>

              <div
                className="client-single inactive position-7"
                data-position="position-7"
              >
                <div className="client-img">
                  <img src={child1} alt="" />
                </div>
                <div className="client-info">
                  <p>
                    أنا وليد من مدينة اللد المحتلة ولقد شاهدت قصة مدينة اللد{' '}
                  </p>
                  <h3>هيا اللولو</h3>
                  <p>
                    <a>5 سنوات</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </section>
  )
}
export default Testimonial

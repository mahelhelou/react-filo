import { Swiper, SwiperSlide } from 'swiper/react'
import '../../../node_modules/swiper/swiper.min.css'

import divider from '../../assets/images/divider.png'
import child1 from '../../assets/images/child1.png'

function Testimonial() {
  function handleClick(e) {
    e.preventDefault()
    let element = document.querySelector('.client-single')
    let active = element.classList.contains('active')
    let elementParent = element.parentElement

    console.log(element)

    if (!active) {
      let activeBlock = elementParent.querySelector('.client-single.active')
      let currentPosition = element.getAttribute('data-position')
      let newPosition = activeBlock.getAttribute('data-position')

      element.classList.add('active')
      element.classList.remove('inactive')
      element.classList.remove(currentPosition)
      element.classList.add(newPosition)
      element.setAttribute('data-position', newPosition)
    }
  }

  return (
    <section id="testimonial-area">
      <div className="container childs">
        <div className="section-title mb-3">آراء مستخدمينا الصغار</div>
        <div className="section-divider">
          <img className="testimonials__divider" src={divider} alt="Divider" />
        </div>
        <Swiper slidesPerView={1} spaceBetween={30} autoplay loop>
          <div className="swiper-wrapper">
            <SwiperSlide className="item">
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
                      <span>5 سنوات</span>
                    </p>
                  </div>
                </div>

                <div
                  className="client-single inactive position-2"
                  data-position="position-2"
                  onClick={handleClick}
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
                      <span>5 سنوات</span>
                    </p>
                  </div>
                </div>

                <div
                  className="client-single inactive position-3"
                  data-position="position-3"
                  onClick={handleClick}
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
                      <span>5 سنوات</span>
                    </p>
                  </div>
                </div>

                <div
                  className="client-single inactive position-4"
                  data-position="position-4"
                  onClick={handleClick}
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
                      <span>5 سنوات</span>
                    </p>
                  </div>
                </div>

                <div
                  className="client-single inactive position-5"
                  data-position="position-5"
                  onClick={handleClick}
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
                      <span>5 سنوات</span>
                    </p>
                  </div>
                </div>

                <div
                  className="client-single inactive position-6"
                  data-position="position-6"
                  onClick={handleClick}
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
                      <span>5 سنوات</span>
                    </p>
                  </div>
                </div>

                <div
                  className="client-single inactive position-7"
                  data-position="position-7"
                  onClick={handleClick}
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
                      <span>5 سنوات</span>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </section>
  )
}
export default Testimonial

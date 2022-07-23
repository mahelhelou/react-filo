import { Swiper, SwiperSlide } from 'swiper/react'
import '../../../node_modules/swiper/swiper.min.css'

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
        <Swiper slidesPerView={1} spaceBetween={30} autoplay loop>
          <div className="swiper-wrapper">
            <SwiperSlide className="item">
              <div className="testi-wrap">
                <div className="client-single">
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

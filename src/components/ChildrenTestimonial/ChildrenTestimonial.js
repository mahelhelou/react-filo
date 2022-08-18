import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import divider from '../../assets/images/divider.png'
import child1 from '../../assets/images/child1.png'

import './ChildrenTestimonial.scss'

function ChildrenTestimonial() {
  const config = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <section id="testimonial-area">
      <div className="section-title mb-3">آراء مستخدمينا الصغار</div>
      <div className="section-divider">
        <img className="testimonials__divider" src={divider} alt="Divider" />
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect} {...config}>
        <Carousel.Item>
          <img className="d-block" src={child1} alt="child1 slide" />
          <div className="carousel-info">
            <p>أنا وليد من مدينة اللد المحتلة ولقد شاهدت قصة مدينة اللد </p>
            <h3>هيا1 اللولو</h3>
            <p>
              <span>5 سنوات</span>
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={child1} alt="child1 slide" />
          <div className="carousel-info">
            <p>أنا وليد من مدينة اللد المحتلة ولقد شاهدت قصة مدينة اللد </p>
            <h3>هيا2 اللولو</h3>
            <p>
              <span>5 سنوات</span>
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={child1} alt="child1 slide" />
          <div className="carousel-info">
            <p>أنا وليد من مدينة اللد المحتلة ولقد شاهدت قصة مدينة اللد </p>
            <h3>هيا3 اللولو</h3>
            <p>
              <span>5 سنوات</span>
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={child1} alt="child1 slide" />
          <div className="carousel-info">
            <p>أنا وليد من مدينة اللد المحتلة ولقد شاهدت قصة مدينة اللد </p>
            <h3>هيا4 اللولو</h3>
            <p>
              <span>5 سنوات</span>
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={child1} alt="child1 slide" />
          <div className="carousel-info">
            <p>أنا وليد من مدينة اللد المحتلة ولقد شاهدت قصة مدينة اللد </p>
            <h3>هيا5 اللولو</h3>
            <p>
              <span>5 سنوات</span>
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={child1} alt="child1 slide" />
          <div className="carousel-info">
            <p>أنا وليد من مدينة اللد المحتلة ولقد شاهدت قصة مدينة اللد </p>
            <h3>هيا6 اللولو</h3>
            <p>
              <span>5 سنوات</span>
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={child1} alt="child1 slide" />
          <div className="carousel-info">
            <p>أنا وليد من مدينة اللد المحتلة ولقد شاهدت قصة مدينة اللد </p>
            <h3>هيا7 اللولو</h3>
            <p>
              <span>5 سنوات</span>
            </p>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  )
}

export default ChildrenTestimonial

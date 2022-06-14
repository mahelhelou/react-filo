import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
// import 'owl.carousel/dist/assets/owl.theme.default.css'

import rank from '../../assets/images/rank.png'
import playBtnOrange from '../../assets/images/play-btn-orange.png'

function Videos() {
  return (
    <section className="videos py-5" id="videos-section">
      <div className="title">
        <h2 className="section-title mb-3">بلدك في فيديو!</h2>
      </div>
      <p className="section-description">
        شاهد المئات من قصص الأطفال المتنوعة من قصص تاريخية وحيوانات وقصص تعزز
        قيم مجتمعية
      </p>
      <OwlCarousel loop margin={10}>
        <div className="item">
          <div className="card">
            <div className="top-card">
              <img src={rank} className="rank-icon" alt="..." />
              <img src={playBtnOrange} className="card-icon" alt="..." />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">قصة القرد المتشائم </h5>
              <p className="card-text">
                مدينة من مدن فلسطين تم احتلالها سنة 1948 علي يد جيش الاحتلال
                الصهيوني
              </p>
              <a href="singleStory.html" className="btn btn-card btn-primary">
                شاهد الان
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="top-card">
              <img src={rank} className="rank-icon" alt="..." />
              <img src={playBtnOrange} className="card-icon" alt="..." />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">قصة القرد المتشائم </h5>
              <p className="card-text">
                مدينة من مدن فلسطين تم احتلالها سنة 1948 علي يد جيش الاحتلال
                الصهيوني
              </p>
              <a href="singleStory.html" className="btn btn-card btn-primary">
                شاهد الان
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="top-card">
              <img src={rank} className="rank-icon" alt="..." />
              <img src={playBtnOrange} className="card-icon" alt="..." />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">قصة القرد المتشائم </h5>
              <p className="card-text">
                مدينة من مدن فلسطين تم احتلالها سنة 1948 علي يد جيش الاحتلال
                الصهيوني
              </p>
              <a href="#" className="btn btn-card btn-primary">
                شاهد الان
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="top-card">
              <img src={rank} className="rank-icon" alt="..." />
              <img src={playBtnOrange} className="card-icon" alt="..." />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">قصة القرد المتشائم </h5>
              <p className="card-text">
                مدينة من مدن فلسطين تم احتلالها سنة 1948 علي يد جيش الاحتلال
                الصهيوني
              </p>
              <a href="#" className="btn btn-card btn-primary">
                شاهد الان
              </a>
            </div>
          </div>
        </div>
      </OwlCarousel>
      <div className="storySection">
        <h2>
          اكتشف رفوف القصص
          <a href="">
            <i className="fa-solid fa-arrow-left-long pr-2"></i>
          </a>
        </h2>
      </div>
    </section>
  )
}

export default Videos

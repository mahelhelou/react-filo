import { Link } from 'react-router-dom'
import videoPlayBtn from '../../assets/images/play-btn-orange.png'

function MultiTrackStories() {
  return (
    <>
      <section className="page-banner about">
        <div className="page-banner__content">
          <h1 className="page-banner__title">قصص حضارية</h1>
          <p className="page-banner__description">
            شاهد الآلاف من القصص التاريخية التي تتحدث عن البلدان العربية
            والبلدات الفلسطينية القديمة بالتحديد
          </p>
        </div>
      </section>

      <section className="stories-section stories-section1 py-5">
        <div className="container">
          <h2 className="section-title section-title--smaller section-title--right mb-4">
            القصص الأكثر مشاهدة
          </h2>
          <div className="row">
            <div className="col-md-3">
              <div className="stories-section__container">
                <div className="stories-section__item">
                  <div className="stories-section__item-save">
                    <span>حفظ</span>
                    <i className="far fa-bookmark"></i>
                  </div>
                  <Link to="/single-story">
                    <img src={videoPlayBtn} alt="" />
                  </Link>
                </div>
                <div className="stories-section__item-info">
                  <div className="stories-section__item-title-rating">
                    <span className="title">قصة شجرة الدر</span>
                    <span className="rating">
                      4.0<i className="fas fa-star"></i>
                    </span>
                  </div>
                  <div className="stories-section__item-views">
                    <span>100 مشاهدة</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stories-section__container">
                <div className="stories-section__item">
                  <div className="stories-section__item-save">
                    <span>حفظ</span>
                    <i className="far fa-bookmark"></i>
                  </div>
                  <Link to="/single-story">
                    <img src={videoPlayBtn} alt="" />
                  </Link>
                </div>
                <div className="stories-section__item-info">
                  <div className="stories-section__item-title-rating">
                    <span className="title">قصة شجرة الدر</span>
                    <span className="rating">
                      4.0<i className="fas fa-star"></i>
                    </span>
                  </div>
                  <div className="stories-section__item-views">
                    <span>100 مشاهدة</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stories-section__container">
                <div className="stories-section__item">
                  <div className="stories-section__item-save">
                    <span>حفظ</span>
                    <i className="far fa-bookmark"></i>
                  </div>
                  <Link to="/single-story">
                    <img src={videoPlayBtn} alt="" />
                  </Link>
                </div>
                <div className="stories-section__item-info">
                  <div className="stories-section__item-title-rating">
                    <span className="title">قصة شجرة الدر</span>
                    <span className="rating">
                      4.0<i className="fas fa-star"></i>
                    </span>
                  </div>
                  <div className="stories-section__item-views">
                    <span>100 مشاهدة</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stories-section__container">
                <div className="stories-section__item">
                  <div className="stories-section__item-save">
                    <span>حفظ</span>
                    <i className="far fa-bookmark"></i>
                  </div>
                  <Link to="/single-story">
                    <img src={videoPlayBtn} alt="" />
                  </Link>
                </div>
                <div className="stories-section__item-info">
                  <div className="stories-section__item-title-rating">
                    <span className="title">قصة شجرة الدر</span>
                    <span className="rating">
                      4.0<i className="fas fa-star"></i>
                    </span>
                  </div>
                  <div className="stories-section__item-views">
                    <span>100 مشاهدة</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stories-section py-5">
        <div className="container">
          <h2 className="section-title section-title--smaller section-title--right mb-4">
            باقي القصص
          </h2>
          <div className="row">
            <div className="col-md-3">
              <div className="stories-section__container">
                <div className="stories-section__item">
                  <div className="stories-section__item-save">
                    <span>حفظ</span>
                    <i className="far fa-bookmark"></i>
                  </div>
                  <Link to="/single-story">
                    <img src={videoPlayBtn} alt="" />
                  </Link>
                </div>
                <div className="stories-section__item-info">
                  <div className="stories-section__item-title-rating">
                    <span className="title">قصة شجرة الدر</span>
                    <span className="rating">
                      4.0<i className="fas fa-star"></i>
                    </span>
                  </div>
                  <div className="stories-section__item-views">
                    <span>100 مشاهدة</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stories-section__container">
                <div className="stories-section__item">
                  <div className="stories-section__item-save">
                    <span>حفظ</span>
                    <i className="far fa-bookmark"></i>
                  </div>
                  <Link to="/single-story">
                    <img src={videoPlayBtn} alt="" />
                  </Link>
                </div>
                <div className="stories-section__item-info">
                  <div className="stories-section__item-title-rating">
                    <span className="title">قصة شجرة الدر</span>
                    <span className="rating">
                      4.0<i className="fas fa-star"></i>
                    </span>
                  </div>
                  <div className="stories-section__item-views">
                    <span>100 مشاهدة</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stories-section__container">
                <div className="stories-section__item">
                  <div className="stories-section__item-save">
                    <span>حفظ</span>
                    <i className="far fa-bookmark"></i>
                  </div>
                  <Link to="/single-story">
                    <img src={videoPlayBtn} alt="" />
                  </Link>
                </div>
                <div className="stories-section__item-info">
                  <div className="stories-section__item-title-rating">
                    <span className="title">قصة شجرة الدر</span>
                    <span className="rating">
                      4.0<i className="fas fa-star"></i>
                    </span>
                  </div>
                  <div className="stories-section__item-views">
                    <span>100 مشاهدة</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stories-section__container">
                <div className="stories-section__item">
                  <div className="stories-section__item-save">
                    <span>حفظ</span>
                    <i className="far fa-bookmark"></i>
                  </div>
                  <Link to="/single-story">
                    <img src={videoPlayBtn} alt="" />
                  </Link>
                </div>
                <div className="stories-section__item-info">
                  <div className="stories-section__item-title-rating">
                    <span className="title">قصة شجرة الدر</span>
                    <span className="rating">
                      4.0<i className="fas fa-star"></i>
                    </span>
                  </div>
                  <div className="stories-section__item-views">
                    <span>100 مشاهدة</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MultiTrackStories

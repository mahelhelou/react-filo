import subscription from '../../assets/images/subscription-bg.png'

import './Plans.scss'

function Plans() {
  return (
    <section className="plans py-5">
      <div className="absoluteBg"></div>
      <div className="section-title mb-3">خطط الاشتراك</div>
      <div className="section-description">
        مستعد لإعداد مكتبتك؟ اختر مدة الاشتراك التي تناسبك
      </div>
      <div className="container">
        <div className="row mt-5 pb-5">
          <div className="back_img col-md-4">
            <div className="back_img">
              <img className="plans__img" src={subscription} alt="" />
            </div>
          </div>
          <div className="col-md-3 align-self-center">
            <h5 className="mb-3 font-weight-bold">
              ما مميزات الاشتراك في موقع فيلو؟
            </h5>
            <ul className="plans__features">
              <li>مسارات لا نهائية من القصص</li>
              <li>مشاهدة بلا حدود</li>
              <li>الإلغاء في أي وقت</li>
              <li>تحميل القصص المفضلة للاستماع إليها بدون إنترنت</li>
            </ul>
          </div>
          <div className="form_col col-md-4 align-self-lg-end">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">بلا حدود</h2>
                <p className="card-text mt-3">
                  احصل على اشتراكك لتستمع بلا حدود إلى آلاف الكتب باللغتين
                  العربية والإنجليزية
                </p>
                <div className="accounts mt-3 mb-3">
                  <div className="clearfix">
                    <h3 className="float-right">حسابات</h3>
                    <h3 className="float-left">1</h3>
                  </div>
                </div>
                <h3>حدد اشتراكك</h3>
                <div className="gform_ch mb-3">
                  <div className="active box1 mt-3">
                    <div className="clearfix">
                      <div className=" float-right form-inline form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option1"
                        />
                        <label
                          className="form-check-label card-title"
                          htmlFor="inlineRadio1"
                        >
                          <h3 className="pr-1">شهري</h3>
                        </label>
                      </div>
                      <h3 className="float-left">
                        20ILS <strong>/</strong> شهريا
                      </h3>
                    </div>
                    <p className="sub-select">يجدد تلقائيا كل شهر </p>
                  </div>
                  <br />
                  <div className=" box1">
                    <div className="clearfix">
                      <div className=" float-right form-inline form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option1"
                        />
                        <label
                          className="form-check-label card-title"
                          htmlFor="inlineRadio1"
                        >
                          <h3 className="pr-1">شهري</h3>
                        </label>
                      </div>
                      <h3 className="float-left">
                        20ILS <strong>/</strong> شهريا
                      </h3>
                    </div>
                    <p className="sub-select">يجدد تلقائيا كل شهر </p>
                  </div>
                  <br />
                  <div className="box1">
                    <div className="clearfix">
                      <div className=" float-right form-inline form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option1"
                        />
                        <label
                          className="form-check-label card-title"
                          htmlFor="inlineRadio1"
                        >
                          <h3 className="pr-1">شهري</h3>
                        </label>
                      </div>
                      <h3 className="float-left">
                        20ILS <strong>/</strong> شهريا
                      </h3>
                    </div>
                    <p className="sub-select">يجدد تلقائيا كل شهر </p>
                  </div>
                </div>
                <a href="#" className="btn btn-block btn-primary">
                  اشترك الان
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Plans

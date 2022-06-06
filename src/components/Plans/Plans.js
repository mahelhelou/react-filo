import subscription from "../../assets/images/subscription-bg.png";


function Plans() {
    return (
        <section class="plans py-5">
            <div class="absoluteBg"></div>
            <div class="section-title mb-3">خطط الاشتراك</div>
            <div class="section-description">مستعد لإعداد مكتبتك؟ اختر مدة الاشتراك التي تناسبك</div>
            <div class="container">
                <div class="row mt-5 pb-5">
                    <div class="back_img col-md-4">
                        <div class="back_img">
                            <img class="plans__img" src={subscription} /></div>
                    </div>
                    <div class="col-md-3 align-self-center">
                        <h5 class="mb-3 font-weight-bold">ما مميزات الاشتراك في موقع فيلو؟</h5>
                        <ul class="plans__features">
                            <li>مسارات لا نهائية من القصص</li>
                            <li>مشاهدة بلا حدود</li>
                            <li>الإلغاء في أي وقت</li>
                            <li>تحميل القصص المفضلة للاستماع إليها بدون إنترنت</li>
                        </ul>
                    </div>
                    <div class="form_col col-md-4 align-self-lg-end">
                        <div class="card">
                            <div class="card-body">
                                <h2 class="card-title">بلا حدود</h2>
                                <p class="card-text mt-3">
                                    احصل على اشتراكك لتستمع بلا حدود إلى آلاف الكتب باللغتين العربية والإنجليزية
                                </p>
                                <div class="accounts mt-3 mb-3">
                                    <div class="clearfix">
                                        <h3 class="float-right">حسابات</h3>
                                        <h3 class="float-left">1
                                        </h3>
                                    </div>
                                </div>
                                <h3>حدد اشتراكك</h3>
                                <div class="gform_ch mb-3">
                                    <div class="active box1 mt-3">

                                        <div class="clearfix">
                                            <div class=" float-right form-inline form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                <label class="form-check-label card-title" for="inlineRadio1">
                                                    <h3 class="pr-1">شهري</h3></label>
                                            </div>
                                            <h3 class="float-left">20ILS <strong>/</strong> شهريا</h3>
                                        </div>
                                        <p class="sub-select">يجدد تلقائيا كل شهر </p>
                                    </div>
                                    <br />
                                    <div class=" box1">

                                        <div class="clearfix">
                                            <div class=" float-right form-inline form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                <label class="form-check-label card-title" for="inlineRadio1">
                                                    <h3 class="pr-1">شهري</h3></label>
                                            </div>
                                            <h3 class="float-left">20ILS <strong>/</strong> شهريا</h3>
                                        </div>
                                        <p class="sub-select">يجدد تلقائيا كل شهر </p>
                                    </div>
                                    <br />
                                    <div class="box1">

                                        <div class="clearfix">
                                            <div class=" float-right form-inline form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                <label class="form-check-label card-title" for="inlineRadio1">
                                                    <h3 class="pr-1">شهري</h3></label>
                                            </div>
                                            <h3 class="float-left">20ILS <strong>/</strong> شهريا</h3>
                                        </div>
                                        <p class="sub-select">يجدد تلقائيا كل شهر </p>
                                    </div>
                                </div>
                                <a href="#" class="btn btn-block btn-primary">اشترك الان</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Plans;
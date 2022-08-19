import play from "../../assets/images/play-btn-orange.png";

import './UserProfile.scss'	

function UserProfile() {
    return (
        <section className="showcase ProfilePage">
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <a className=" active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
                                    <i className="fa-solid fa-user pl-2"></i>الصفحة الشخصية</a>
                            </li>
                            <li className="list-group-item">
                                <a id="pills-store-tab" data-toggle="pill" href="#pills-store" role="tab" aria-controls="pills-store" aria-selected="false">
                                    <i className="fa-solid fa-bars pl-2"></i>مكتبتى </a>
                            </li>
                            <li className="list-group-item">
                                <a id="pills-other-tab" data-toggle="pill" href="#pills-other" role="tab" aria-controls="pills-other" aria-selected="false">
                                    <i className="fa-solid fa-circle-chevron-down pl-2"></i>الفيديوهات المحفوظة </a>
                            </li>
                            <li className="list-group-item">
                                <a id="pills-exit-tab" data-toggle="pill" href="#pills-exit" role="tab" aria-controls="pills-exit" aria-selected="false">
                                    <i className="fa-solid fa-arrow-right-from-bracket pl-2"></i>تسجيل خروج</a>
                            </li>

                        </ul>

                    </div>


                </div>
                <div className="col-md-9">
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div className="profileUser">
                                <img src="images/child1.png" alt="" />
                            </div>
                            <div className="editprofileUser mt-1">
                                <a data-toggle="modal" data-target="#edit-form" href=""><i className="fa-solid fa-pen-to-square pl-2"></i>تعديل البيانات</a>
                            </div>
                            <div className="infoUser mt-1">
                                <h2>وليد  النجار</h2>
                                <h3>5سنوات</h3>
                                <h4>فلسطين</h4>
                                <p>عمري خمس سنوات وأحب القصص المضحكة</p>
                            </div>
                            <div className="container">
                                <h2 className="section-title section-title--smaller section-title--right mb-4">استمر بالمشاهدة</h2>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="stories-section__container">
                                            <div className="stories-section__item">
                                                <div className="stories-section__item-save"><span>حفظ</span><i className="far fa-bookmark"></i></div><a href="#"><img src={play} /></a>
                                            </div>
                                            <div className="stories-section__item-info">
                                                <div className="stories-section__item-title-rating"><span className="title">قصة شجرة الدر</span><span className="rating">4.0<i className="fas fa-star"></i></span></div>
                                                <div className="stories-section__item-views"><span>100 مشاهدة</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="stories-section__container">
                                            <div className="stories-section__item">
                                                <div className="stories-section__item-save"><span>حفظ</span><i className="far fa-bookmark"></i></div><a href="#"><img src={play} /></a>
                                            </div>
                                            <div className="stories-section__item-info">
                                                <div className="stories-section__item-title-rating"><span className="title">قصة شجرة الدر</span><span className="rating">4.0<i className="fas fa-star"></i></span></div>
                                                <div className="stories-section__item-views"><span>100 مشاهدة</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="stories-section__container">
                                            <div className="stories-section__item">
                                                <div className="stories-section__item-save"><span>حفظ</span><i className="far fa-bookmark"></i></div><a href="#"><img src={play} /></a>
                                            </div>
                                            <div className="stories-section__item-info">
                                                <div className="stories-section__item-title-rating"><span className="title">قصة شجرة الدر</span><span className="rating">4.0<i className="fas fa-star"></i></span></div>
                                                <div className="stories-section__item-views"><span>100 مشاهدة</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="tab-pane fade" id="pills-store" role="tabpanel" aria-labelledby="pills-store-tab">
                            <div className="container">
                                <h2 className="section-title section-title--smaller section-title--right">القصص التي شاهدتها من قبل </h2>
                                <div className="row mt-5">
                                    <div className="col-md-4">
                                        <div className="stories-section__container">
                                            <div className="stories-section__item">
                                                <div className="stories-section__item-save"><span>حفظ</span><i className="far fa-bookmark"></i></div><a href="#"><img src={play} /></a>
                                            </div>
                                            <div className="stories-section__item-info">
                                                <div className="stories-section__item-title-rating"><span className="title">قصة شجرة الدر</span><span className="rating">4.0<i className="fas fa-star"></i></span></div>
                                                <div className="stories-section__item-views"><span>100 مشاهدة</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="stories-section__container">
                                            <div className="stories-section__item">
                                                <div className="stories-section__item-save"><span>حفظ</span><i className="far fa-bookmark"></i></div><a href="#"><img src={play} /></a>
                                            </div>
                                            <div className="stories-section__item-info">
                                                <div className="stories-section__item-title-rating"><span className="title">قصة شجرة الدر</span><span className="rating">4.0<i className="fas fa-star"></i></span></div>
                                                <div className="stories-section__item-views"><span>100 مشاهدة</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="stories-section__container">
                                            <div className="stories-section__item">
                                                <div className="stories-section__item-save"><span>حفظ</span><i className="far fa-bookmark"></i></div><a href="#"><img src={play} /></a>
                                            </div>
                                            <div className="stories-section__item-info">
                                                <div className="stories-section__item-title-rating"><span className="title">قصة شجرة الدر</span><span className="rating">4.0<i className="fas fa-star"></i></span></div>
                                                <div className="stories-section__item-views"><span>100 مشاهدة</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-4">
                                        <div className="stories-section__container">
                                            <div className="stories-section__item">
                                                <div className="stories-section__item-save"><span>حفظ</span><i className="far fa-bookmark"></i></div><a href="#"><img src={play} /></a>
                                            </div>
                                            <div className="stories-section__item-info">
                                                <div className="stories-section__item-title-rating"><span className="title">قصة شجرة الدر</span><span className="rating">4.0<i className="fas fa-star"></i></span></div>
                                                <div className="stories-section__item-views"><span>100 مشاهدة</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="stories-section__container">
                                            <div className="stories-section__item">
                                                <div className="stories-section__item-save"><span>حفظ</span><i className="far fa-bookmark"></i></div><a href="#"><img src={play} /></a>
                                            </div>
                                            <div className="stories-section__item-info">
                                                <div className="stories-section__item-title-rating"><span className="title">قصة شجرة الدر</span><span className="rating">4.0<i className="fas fa-star"></i></span></div>
                                                <div className="stories-section__item-views"><span>100 مشاهدة</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="stories-section__container">
                                            <div className="stories-section__item">
                                                <div className="stories-section__item-save"><span>حفظ</span><i className="far fa-bookmark"></i></div><a href="#"><img src={play} /></a>
                                            </div>
                                            <div className="stories-section__item-info">
                                                <div className="stories-section__item-title-rating"><span className="title">قصة شجرة الدر</span><span className="rating">4.0<i className="fas fa-star"></i></span></div>
                                                <div className="stories-section__item-views"><span>100 مشاهدة</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-exit" role="tabpanel" aria-labelledby="pills-exit-tab">
                            <div className="container exit">
                                <h2 className="text-center">تسجيل الخروج</h2>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-other" role="tabpanel" aria-labelledby="pills-other-tab">
                            <div className="container">
                                <h2 className="section-title section-title--smaller section-title--right">القصص التي قمت بحفظها </h2>
                                <div className="row mt-5">
                                    <div className="col-md-4">
                                        <div className="stories-section__container">
                                            <div className="stories-section__item">
                                                <div className="stories-section__item-save"><span>حفظ</span><i className="far fa-bookmark"></i></div><a href="#"><img src={play} /></a>
                                            </div>
                                            <div className="stories-section__item-info">
                                                <div className="stories-section__item-title-rating"><span className="title">قصة شجرة الدر</span><span className="rating">4.0<i className="fas fa-star"></i></span></div>
                                                <div className="stories-section__item-views"><span>100 مشاهدة</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="stories-section__container">
                                            <div className="stories-section__item">
                                                <div className="stories-section__item-save"><span>حفظ</span><i className="far fa-bookmark"></i></div><a href="#"><img src={play} /></a>
                                            </div>
                                            <div className="stories-section__item-info">
                                                <div className="stories-section__item-title-rating"><span className="title">قصة شجرة الدر</span><span className="rating">4.0<i className="fas fa-star"></i></span></div>
                                                <div className="stories-section__item-views"><span>100 مشاهدة</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="stories-section__container">
                                            <div className="stories-section__item">
                                                <div className="stories-section__item-save"><span>حفظ</span><i className="far fa-bookmark"></i></div><a href="#"><img src={play} /></a>
                                            </div>
                                            <div className="stories-section__item-info">
                                                <div className="stories-section__item-title-rating"><span className="title">قصة شجرة الدر</span><span className="rating">4.0<i className="fas fa-star"></i></span></div>
                                                <div className="stories-section__item-views"><span>100 مشاهدة</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-4">
                                        <div className="stories-section__container">
                                            <div className="stories-section__item">
                                                <div className="stories-section__item-save"><span>حفظ</span><i className="far fa-bookmark"></i></div><a href="#"><img src={play} /></a>
                                            </div>
                                            <div className="stories-section__item-info">
                                                <div className="stories-section__item-title-rating"><span className="title">قصة شجرة الدر</span><span className="rating">4.0<i className="fas fa-star"></i></span></div>
                                                <div className="stories-section__item-views"><span>100 مشاهدة</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="stories-section__container">
                                            <div className="stories-section__item">
                                                <div className="stories-section__item-save"><span>حفظ</span><i className="far fa-bookmark"></i></div><a href="#"><img src={play} /></a>
                                            </div>
                                            <div className="stories-section__item-info">
                                                <div className="stories-section__item-title-rating"><span className="title">قصة شجرة الدر</span><span className="rating">4.0<i className="fas fa-star"></i></span></div>
                                                <div className="stories-section__item-views"><span>100 مشاهدة</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="stories-section__container">
                                            <div className="stories-section__item">
                                                <div className="stories-section__item-save"><span>حفظ</span><i className="far fa-bookmark"></i></div><a href="#"><img src={play} /></a>
                                            </div>
                                            <div className="stories-section__item-info">
                                                <div className="stories-section__item-title-rating"><span className="title">قصة شجرة الدر</span><span className="rating">4.0<i className="fas fa-star"></i></span></div>
                                                <div className="stories-section__item-views"><span>100 مشاهدة</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section >
    );
}

export default UserProfile;
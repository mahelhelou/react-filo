import play from "../../assets/images/play-btn-orange.png";


function UserProfile() {
    return (
        <section class="showcase ProfilePage">
            <div class="row">
                <div class="col-md-3">
                    <div class="card">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <a class=" active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
                                    <i class="fa-solid fa-user pl-2"></i>الصفحة الشخصية</a>
                            </li>
                            <li class="list-group-item">
                                <a id="pills-store-tab" data-toggle="pill" href="#pills-store" role="tab" aria-controls="pills-store" aria-selected="false">
                                    <i class="fa-solid fa-bars pl-2"></i>مكتبتى </a>
                            </li>
                            <li class="list-group-item">
                                <a id="pills-other-tab" data-toggle="pill" href="#pills-other" role="tab" aria-controls="pills-other" aria-selected="false">
                                    <i class="fa-solid fa-circle-chevron-down pl-2"></i>الفيديوهات المحفوظة </a>
                            </li>
                            <li class="list-group-item">
                                <a id="pills-exit-tab" data-toggle="pill" href="#pills-exit" role="tab" aria-controls="pills-exit" aria-selected="false">
                                    <i class="fa-solid fa-arrow-right-from-bracket pl-2"></i>تسجيل خروج</a>
                            </li>

                        </ul>

                    </div>


                </div>
                <div class="col-md-9">
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div class="profileUser">
                                <img src="images/child1.png" alt="" />
                            </div>
                            <div class="editprofileUser mt-1">
                                <a data-toggle="modal" data-target="#edit-form" href=""><i class="fa-solid fa-pen-to-square pl-2"></i>تعديل البيانات</a>
                            </div>
                            <div class="infoUser mt-1">
                                <h2>وليد  النجار</h2>
                                <h3>5سنوات</h3>
                                <h4>فلسطين</h4>
                                <p>عمري خمس سنوات وأحب القصص المضحكة</p>
                            </div>
                            <div class="container">
                                <h2 class="section-title section-title--smaller section-title--right mb-4">استمر بالمشاهدة</h2>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="stories-section__container">
                                            <div class="stories-section__item">
                                                <div class="stories-section__item-save"><span>حفظ</span><i class="far fa-bookmark"></i></div><a href="#"><img src={play} /></a>
                                            </div>
                                            <div class="stories-section__item-info">
                                                <div class="stories-section__item-title-rating"><span class="title">قصة شجرة الدر</span><span class="rating">4.0<i class="fas fa-star"></i></span></div>
                                                <div class="stories-section__item-views"><span>100 مشاهدة</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="stories-section__container">
                                            <div class="stories-section__item">
                                                <div class="stories-section__item-save"><span>حفظ</span><i class="far fa-bookmark"></i></div><a href="#"><img src={play} /></a>
                                            </div>
                                            <div class="stories-section__item-info">
                                                <div class="stories-section__item-title-rating"><span class="title">قصة شجرة الدر</span><span class="rating">4.0<i class="fas fa-star"></i></span></div>
                                                <div class="stories-section__item-views"><span>100 مشاهدة</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="stories-section__container">
                                            <div class="stories-section__item">
                                                <div class="stories-section__item-save"><span>حفظ</span><i class="far fa-bookmark"></i></div><a href="#"><img src={play} /></a>
                                            </div>
                                            <div class="stories-section__item-info">
                                                <div class="stories-section__item-title-rating"><span class="title">قصة شجرة الدر</span><span class="rating">4.0<i class="fas fa-star"></i></span></div>
                                                <div class="stories-section__item-views"><span>100 مشاهدة</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div class="tab-pane fade" id="pills-store" role="tabpanel" aria-labelledby="pills-store-tab">
                            <div class="container">
                                <h2 class="section-title section-title--smaller section-title--right">القصص التي شاهدتها من قبل </h2>
                                <div class="row mt-5">
                                    <div class="col-md-4">
                                        <div class="stories-section__container">
                                            <div class="stories-section__item">
                                                <div class="stories-section__item-save"><span>حفظ</span><i class="far fa-bookmark"></i></div><a href="#"><img src={play} /></a>
                                            </div>
                                            <div class="stories-section__item-info">
                                                <div class="stories-section__item-title-rating"><span class="title">قصة شجرة الدر</span><span class="rating">4.0<i class="fas fa-star"></i></span></div>
                                                <div class="stories-section__item-views"><span>100 مشاهدة</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="stories-section__container">
                                            <div class="stories-section__item">
                                                <div class="stories-section__item-save"><span>حفظ</span><i class="far fa-bookmark"></i></div><a href="#"><img src={play} /></a>
                                            </div>
                                            <div class="stories-section__item-info">
                                                <div class="stories-section__item-title-rating"><span class="title">قصة شجرة الدر</span><span class="rating">4.0<i class="fas fa-star"></i></span></div>
                                                <div class="stories-section__item-views"><span>100 مشاهدة</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="stories-section__container">
                                            <div class="stories-section__item">
                                                <div class="stories-section__item-save"><span>حفظ</span><i class="far fa-bookmark"></i></div><a href="#"><img src={play} /></a>
                                            </div>
                                            <div class="stories-section__item-info">
                                                <div class="stories-section__item-title-rating"><span class="title">قصة شجرة الدر</span><span class="rating">4.0<i class="fas fa-star"></i></span></div>
                                                <div class="stories-section__item-views"><span>100 مشاهدة</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-4">
                                        <div class="stories-section__container">
                                            <div class="stories-section__item">
                                                <div class="stories-section__item-save"><span>حفظ</span><i class="far fa-bookmark"></i></div><a href="#"><img src={play} /></a>
                                            </div>
                                            <div class="stories-section__item-info">
                                                <div class="stories-section__item-title-rating"><span class="title">قصة شجرة الدر</span><span class="rating">4.0<i class="fas fa-star"></i></span></div>
                                                <div class="stories-section__item-views"><span>100 مشاهدة</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="stories-section__container">
                                            <div class="stories-section__item">
                                                <div class="stories-section__item-save"><span>حفظ</span><i class="far fa-bookmark"></i></div><a href="#"><img src={play} /></a>
                                            </div>
                                            <div class="stories-section__item-info">
                                                <div class="stories-section__item-title-rating"><span class="title">قصة شجرة الدر</span><span class="rating">4.0<i class="fas fa-star"></i></span></div>
                                                <div class="stories-section__item-views"><span>100 مشاهدة</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="stories-section__container">
                                            <div class="stories-section__item">
                                                <div class="stories-section__item-save"><span>حفظ</span><i class="far fa-bookmark"></i></div><a href="#"><img src={play} /></a>
                                            </div>
                                            <div class="stories-section__item-info">
                                                <div class="stories-section__item-title-rating"><span class="title">قصة شجرة الدر</span><span class="rating">4.0<i class="fas fa-star"></i></span></div>
                                                <div class="stories-section__item-views"><span>100 مشاهدة</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-exit" role="tabpanel" aria-labelledby="pills-exit-tab">
                            <div class="container exit">
                                <h2 class="text-center">تسجيل الخروج</h2>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-other" role="tabpanel" aria-labelledby="pills-other-tab">
                            <div class="container">
                                <h2 class="section-title section-title--smaller section-title--right">القصص التي قمت بحفظها </h2>
                                <div class="row mt-5">
                                    <div class="col-md-4">
                                        <div class="stories-section__container">
                                            <div class="stories-section__item">
                                                <div class="stories-section__item-save"><span>حفظ</span><i class="far fa-bookmark"></i></div><a href="#"><img src={play} /></a>
                                            </div>
                                            <div class="stories-section__item-info">
                                                <div class="stories-section__item-title-rating"><span class="title">قصة شجرة الدر</span><span class="rating">4.0<i class="fas fa-star"></i></span></div>
                                                <div class="stories-section__item-views"><span>100 مشاهدة</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="stories-section__container">
                                            <div class="stories-section__item">
                                                <div class="stories-section__item-save"><span>حفظ</span><i class="far fa-bookmark"></i></div><a href="#"><img src={play} /></a>
                                            </div>
                                            <div class="stories-section__item-info">
                                                <div class="stories-section__item-title-rating"><span class="title">قصة شجرة الدر</span><span class="rating">4.0<i class="fas fa-star"></i></span></div>
                                                <div class="stories-section__item-views"><span>100 مشاهدة</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="stories-section__container">
                                            <div class="stories-section__item">
                                                <div class="stories-section__item-save"><span>حفظ</span><i class="far fa-bookmark"></i></div><a href="#"><img src={play} /></a>
                                            </div>
                                            <div class="stories-section__item-info">
                                                <div class="stories-section__item-title-rating"><span class="title">قصة شجرة الدر</span><span class="rating">4.0<i class="fas fa-star"></i></span></div>
                                                <div class="stories-section__item-views"><span>100 مشاهدة</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-4">
                                        <div class="stories-section__container">
                                            <div class="stories-section__item">
                                                <div class="stories-section__item-save"><span>حفظ</span><i class="far fa-bookmark"></i></div><a href="#"><img src={play} /></a>
                                            </div>
                                            <div class="stories-section__item-info">
                                                <div class="stories-section__item-title-rating"><span class="title">قصة شجرة الدر</span><span class="rating">4.0<i class="fas fa-star"></i></span></div>
                                                <div class="stories-section__item-views"><span>100 مشاهدة</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="stories-section__container">
                                            <div class="stories-section__item">
                                                <div class="stories-section__item-save"><span>حفظ</span><i class="far fa-bookmark"></i></div><a href="#"><img src={play} /></a>
                                            </div>
                                            <div class="stories-section__item-info">
                                                <div class="stories-section__item-title-rating"><span class="title">قصة شجرة الدر</span><span class="rating">4.0<i class="fas fa-star"></i></span></div>
                                                <div class="stories-section__item-views"><span>100 مشاهدة</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="stories-section__container">
                                            <div class="stories-section__item">
                                                <div class="stories-section__item-save"><span>حفظ</span><i class="far fa-bookmark"></i></div><a href="#"><img src={play} /></a>
                                            </div>
                                            <div class="stories-section__item-info">
                                                <div class="stories-section__item-title-rating"><span class="title">قصة شجرة الدر</span><span class="rating">4.0<i class="fas fa-star"></i></span></div>
                                                <div class="stories-section__item-views"><span>100 مشاهدة</span></div>
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
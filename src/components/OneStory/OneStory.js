import play from "../../assets/images/play-btn-orange.png";


function OneStory() {
    return (
        <section class="likeStories">
            <div class="container">
                <h2 class="text-right">قصص قد تعجبك<i class="fa-solid fa-heart pr-1"></i></h2>
                <div class="row mt-3 mb-5">
                    <div class="col-md-3">
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
                    <div class="col-md-3">
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
                    <div class="col-md-3">
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
                    <div class="col-md-3">
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
        </section>
    )
}
export default OneStory;
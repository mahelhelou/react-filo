import play from "../../assets/images/play-btn-orange.png";


function UserSearch() {
    return (
        <section class="search-results py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="search-results__item"><a href="#"><img src={play} /></a></div>
                    </div>
                    <div class="col-md-8"><span class="search-results__item-category">قصة حضارية</span><a class="search-results__item-title" href="#">
                        <h2>الأميرة النائمة</h2></a>
                        <p>هذا النص هو نص تجريبي لعرض جزء من وصف القصة التي سيتم ادخاله من لوحة التحكم.</p>
                        <div class="search-results__item-info text-danger">
                            <p>عدد المشاهدات: &nbsp;<span>289 مشاهدة</span></p>
                            <p>التقييم: &nbsp;<span>4.5</span></p><a class="btn btn-link text-danger font-weighb-bold">← شاهد القصة</a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="search-results__item"><a href="#"><img src={play} /></a></div>
                    </div>
                    <div class="col-md-8"><span class="search-results__item-category">قصة حضارية</span><a class="search-results__item-title" href="#">
                        <h2>الأميرة النائمة</h2></a>
                        <p>هذا النص هو نص تجريبي لعرض جزء من وصف القصة التي سيتم ادخاله من لوحة التحكم.</p>
                        <div class="search-results__item-info text-danger">
                            <p>عدد المشاهدات: &nbsp;<span>289 مشاهدة</span></p>
                            <p>التقييم: &nbsp;<span>4.5</span></p><a class="btn btn-link text-danger font-weighb-bold">← شاهد القصة</a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="search-results__item"><a href="#"><img src={play} /></a></div>
                    </div>
                    <div class="col-md-8"><span class="search-results__item-category">قصة حضارية</span><a class="search-results__item-title" href="#">
                        <h2>الأميرة النائمة</h2></a>
                        <p>هذا النص هو نص تجريبي لعرض جزء من وصف القصة التي سيتم ادخاله من لوحة التحكم.</p>
                        <div class="search-results__item-info text-danger">
                            <p>عدد المشاهدات: &nbsp;<span>289 مشاهدة</span></p>
                            <p>التقييم: &nbsp;<span>4.5</span></p><a class="btn btn-link text-danger font-weighb-bold">← شاهد القصة</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default UserSearch;
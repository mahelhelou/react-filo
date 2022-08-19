import play from "../../assets/images/play-btn-orange.png";

import './UserSearch.scss'

function UserSearch() {
    return (
        <section className="search-results py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="search-results__item"><a href="#"><img src={play} /></a></div>
                    </div>
                    <div className="col-md-8"><span className="search-results__item-category">قصة حضارية</span><a className="search-results__item-title" href="#">
                        <h2>الأميرة النائمة</h2></a>
                        <p>هذا النص هو نص تجريبي لعرض جزء من وصف القصة التي سيتم ادخاله من لوحة التحكم.</p>
                        <div className="search-results__item-info text-danger">
                            <p>عدد المشاهدات: &nbsp;<span>289 مشاهدة</span></p>
                            <p>التقييم: &nbsp;<span>4.5</span></p><a className="btn btn-link text-danger font-weighb-bold">← شاهد القصة</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="search-results__item"><a href="#"><img src={play} /></a></div>
                    </div>
                    <div className="col-md-8"><span className="search-results__item-category">قصة حضارية</span><a className="search-results__item-title" href="#">
                        <h2>الأميرة النائمة</h2></a>
                        <p>هذا النص هو نص تجريبي لعرض جزء من وصف القصة التي سيتم ادخاله من لوحة التحكم.</p>
                        <div className="search-results__item-info text-danger">
                            <p>عدد المشاهدات: &nbsp;<span>289 مشاهدة</span></p>
                            <p>التقييم: &nbsp;<span>4.5</span></p><a className="btn btn-link text-danger font-weighb-bold">← شاهد القصة</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="search-results__item"><a href="#"><img src={play} /></a></div>
                    </div>
                    <div className="col-md-8"><span className="search-results__item-category">قصة حضارية</span><a className="search-results__item-title" href="#">
                        <h2>الأميرة النائمة</h2></a>
                        <p>هذا النص هو نص تجريبي لعرض جزء من وصف القصة التي سيتم ادخاله من لوحة التحكم.</p>
                        <div className="search-results__item-info text-danger">
                            <p>عدد المشاهدات: &nbsp;<span>289 مشاهدة</span></p>
                            <p>التقييم: &nbsp;<span>4.5</span></p><a className="btn btn-link text-danger font-weighb-bold">← شاهد القصة</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default UserSearch;
// import logo from "../../assets/images/logo.png";
import rank from "../../assets/images/rank.png";
import play from "../../assets/images/play-btn-orange.png";


function Videos() {
    return (
        <section class="videos py-5" id="videos-section">
            <div class="title">
                <h2 class="section-title mb-3">بلدك في فيديو!</h2>
            </div>
            <p class="section-description">شاهد المئات من قصص الأطفال المتنوعة من قصص تاريخية وحيوانات وقصص تعزز قيم مجتمعية</p>
            <div class="owl-carousel ow-theme">
                <div class="item">
                    <div class="card">
                        <div class="top-card">
                            <img src={rank} class="rank-icon" alt="..." />
                            <img src={play} class="card-icon" alt="..." />
                        </div>
                        <div class="card-body text-center">
                            <h5 class="card-title">قصة القرد المتشائم </h5>
                            <p class="card-text">
                                مدينة من مدن فلسطين تم احتلالها سنة 1948 علي يد
                                جيش الاحتلال الصهيوني
                            </p>
                            <a href="singleStory.html" class="btn btn-card btn-primary">شاهد الان</a>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="card">
                        <div class="top-card">
                            <img src={rank} class="rank-icon" alt="..." />
                            <img src={play} class="card-icon" alt="..." />
                        </div>
                        <div class="card-body text-center">
                            <h5 class="card-title">قصة القرد المتشائم </h5>
                            <p class="card-text">
                                مدينة من مدن فلسطين تم احتلالها سنة 1948 علي يد
                                جيش الاحتلال الصهيوني
                            </p>
                            <a href="singleStory.html" class="btn btn-card btn-primary">شاهد الان</a>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="card">
                        <div class="top-card">
                            <img src={rank} class="rank-icon" alt="..." />
                            <img src={play} class="card-icon" alt="..." />
                        </div>
                        <div class="card-body text-center">
                            <h5 class="card-title">قصة القرد المتشائم </h5>
                            <p class="card-text">
                                مدينة من مدن فلسطين تم احتلالها سنة 1948 علي يد
                                جيش الاحتلال الصهيوني
                            </p>
                            <a href="#" class="btn btn-card btn-primary">شاهد الان</a>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="card">
                        <div class="top-card">
                            <img src={rank} class="rank-icon" alt="..." />
                            <img src={play} class="card-icon" alt="..." />
                        </div>
                        <div class="card-body text-center">
                            <h5 class="card-title">قصة القرد المتشائم </h5>
                            <p class="card-text">
                                مدينة من مدن فلسطين تم احتلالها سنة 1948 علي يد
                                جيش الاحتلال الصهيوني
                            </p>
                            <a href="#" class="btn btn-card btn-primary">شاهد الان</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="storySection">
                <h2>اكتشف رفوف القصص
                    <a href=""><i class="fa-solid fa-arrow-left-long pr-2"></i></a>
                </h2>
            </div>
        </section>
    );
}

export default Videos;

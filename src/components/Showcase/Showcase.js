// import logo from "../../assets/images/logo.png";
import showcase__cta from "../../assets/images/play-btn-orange.png";
import showcase__image from "../../assets/images/showcase-bg.png";

function Showcase() {
  return (
    <section class="showcase">
      <div class="">
        <div class="row">
          <div class="firstDiv col-lg-6">
            <h1 class="mt-0 mt-md-5 pt-5 font-weight-bolder">
              كل تفصيلة ببلدك.. هنحكيها لابنك
            </h1>
            <div class="showcase__cta">
              <button class="btn btn-danger btn-lg rounded-pill mt-5">
                جرّب الآن
              </button>
              <div class="showcase__cta-img">
                <img src={showcase__cta} />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="showcase__image">
              <img class="img-fluid" src={showcase__image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;

// import logo from "../../assets/images/logo.png";
import showcase__cta from "../../assets/images/play-btn-orange.png";
import showcase__image from "../../assets/images/showcase-bg.png";

function Showcase() {
  return (
    <section className="showcase">
      <div className="">
        <div className="row">
          <div className="firstDiv col-lg-6">
            <h1 className="mt-0 mt-md-5 pt-5 font-weight-bolder">
              كل تفصيلة ببلدك.. هنحكيها لابنك
            </h1>
            <div className="showcase__cta">
              <button className="btn btn-danger btn-lg rounded-pill mt-5">
                جرّب الآن
              </button>
              <div className="showcase__cta-img">
                <img src={showcase__cta} />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="showcase__image">
              <img className="img-fluid" src={showcase__image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;

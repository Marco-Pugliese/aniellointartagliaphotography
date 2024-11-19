import { Container } from "react-bootstrap";

const SliderPubblicazioni = () => {
  return (
    <>
      <section id="sliderContainer">
        <Container fluid id="slide" className="p-0 py-5 position-relative">
          <div className="row1 d-flex flex-row">
            <div className="slidingbg">
              <div className="w-100 h-100 aniedd1"></div>
            </div>
            <div className="slidingbg">
              <div className="w-100 h-100 aniedd2"></div>
            </div>
            <div className="slidingbg">
              <div className="w-100 h-100 aniedd3"></div>
            </div>
            <div className="slidingbg">
              <div className="w-100 h-100 aniedd4"></div>
            </div>
          </div>
          <div className="row2 d-flex flex-row">
            <div className="slidingbg">
              <div className="w-100 h-100 aniedd5"></div>
            </div>
            <div className="slidingbg">
              <div className="w-100 h-100 aniedd6"></div>
            </div>
            <div className="slidingbg">
              <div className="w-100 h-100 aniedd7"></div>
            </div>
            <div className="slidingbg">
              <div className="w-100 h-100 aniedd8"></div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
export default SliderPubblicazioni;

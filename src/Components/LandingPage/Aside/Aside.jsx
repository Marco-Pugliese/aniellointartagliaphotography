import { Carousel, Col, Container, Row } from "react-bootstrap";

const Aside = () => {
  return (
    <>
      <div className="w-100 text-center fs-4 text-1"> Latest Events</div>
      <Container className="py-4">
        <Row className="py-4 h-100">
          <Col className=" col-12 col-lg-6 min-h-30vh">
            <div className="w-100 text-center cursive text-shadow mb-3">
              Nome Evento1
            </div>
            <Carousel className="text-center">
              <Carousel.Item>
                <img
                  className="w-100 rounded-4"
                  src="https://picsum.photos/500/400"
                  alt="photo"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-100 rounded-4"
                  src="https://picsum.photos/550/400"
                  alt="photo"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-100 rounded-4"
                  src="https://picsum.photos/600/400"
                  alt="photo"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-100 rounded-4"
                  src="https://picsum.photos/650/400"
                  alt="photo"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col className=" col-12 col-lg-6 min-h-30vh">
            <div className="w-100 text-center cursive text-shadow mb-3">
              Nome Evento2
            </div>

            <Carousel className="text-center">
              <Carousel.Item>
                <img
                  className="w-100 rounded-4"
                  src="https://picsum.photos/700/400"
                  alt="photo"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-100 rounded-4"
                  src="https://picsum.photos/750/400"
                  alt="photo"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-100 rounded-4"
                  src="https://picsum.photos/800/400"
                  alt="photo"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-100 rounded-4"
                  src="https://picsum.photos/850/400"
                  alt="photo"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col className=" col-12 col-lg-6 min-h-30vh">
            <div className="w-100 text-center cursive text-shadow mb-3">
              Nome Evento3
            </div>
            <Carousel className="text-center">
              <Carousel.Item>
                <img
                  className="w-100 rounded-4"
                  src="https://picsum.photos/900/400"
                  alt="photo"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-100 rounded-4"
                  src="https://picsum.photos/950/400"
                  alt="photo"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-100 rounded-4"
                  src="https://picsum.photos/835/400"
                  alt="photo"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-100 rounded-4"
                  src="https://picsum.photos/525/400"
                  alt="photo"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col className=" col-12 col-lg-6 min-h-30vh">
            <div className="w-100 text-center cursive text-shadow mb-3">
              Nome Evento4
            </div>

            <Carousel className="text-center">
              <Carousel.Item>
                <img
                  className="w-100 rounded-4"
                  src="https://picsum.photos/575/400"
                  alt="photo"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-100 rounded-4"
                  src="https://picsum.photos/625/400"
                  alt="photo"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-100 rounded-4"
                  src="https://picsum.photos/675/400"
                  alt="photo"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-100 rounded-4"
                  src="https://picsum.photos/725/400"
                  alt="photo"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Aside;

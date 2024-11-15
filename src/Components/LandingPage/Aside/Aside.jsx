import { Carousel, Col, Container, Row } from "react-bootstrap";

const Aside = () => {
  return (
    <>
      <div className="w-100 text-center fs-4 text-1"> Latest Events</div>
      <Container className="py-4">
        <Row className="py-4">
          <Col className="my-auto col-12 col-lg-6 py-4">
            <div className="w-100 text-center cursive">Nome Evento1</div>
            <Carousel className="text-center">
              <Carousel.Item>
                <img
                  className="w-100"
                  src="https://placedog.net/900/800"
                  alt="loremdog"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-100"
                  src="https://placedog.net/910/800"
                  alt="loremdog"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-100"
                  src="https://placedog.net/920/800"
                  alt="loremdog"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-100"
                  src="https://placedog.net/930/800"
                  alt="loremdog"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col className="my-auto col-12 col-lg-6 py-4">
            <div className="w-100 text-center cursive">Nome Evento2</div>

            <Carousel className="text-center">
              <Carousel.Item>
                <img
                  className="w-100"
                  src="https://placedog.net/920/800"
                  alt="loremdog"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-100"
                  src="https://placedog.net/925/800"
                  alt="loremdog"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-100"
                  src="https://placedog.net/930/800"
                  alt="loremdog"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-100"
                  src="https://placedog.net/935/800"
                  alt="loremdog"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col className="my-auto col-12 col-lg-6 py-4">
            <div className="w-100 text-center cursive">Nome Evento3</div>
            <Carousel className="text-center">
              <Carousel.Item>
                <img
                  className="w-100"
                  src="https://placedog.net/940/800"
                  alt="loremdog"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-100"
                  src="https://placedog.net/945/800"
                  alt="loremdog"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-100"
                  src="https://placedog.net/950/800"
                  alt="loremdog"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-100"
                  src="https://placedog.net/955/800"
                  alt="loremdog"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col className="my-auto col-12 col-lg-6 py-4">
            <div className="w-100 text-center cursive">Nome Evento4</div>

            <Carousel className="text-center">
              <Carousel.Item>
                <img
                  className="w-100"
                  src="https://placedog.net/960/800"
                  alt="loremdog"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-100"
                  src="https://placedog.net/965/800"
                  alt="loremdog"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-100"
                  src="https://placedog.net/970/800"
                  alt="loremdog"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-100"
                  src="https://placedog.net/975/800"
                  alt="loremdog"
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

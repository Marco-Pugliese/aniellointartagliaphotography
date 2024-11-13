import { Col, Row } from "react-bootstrap";

const LandingPage = () => {
  return (
    <>
      <div id="LandingPage">
        <Row className="p-0 m-0 w-100 text-light">
          <Col className="col-12 col-md-6 bg-info d-flex align-items-center justify-content-center">
            FOTO1
          </Col>
          <Col className="col-6 d-none d-md-flex bg-danger d-flex align-items-center justify-content-center">
            FOTO 2
          </Col>
          <Col className="col-6 d-none d-xl-flex bg-warning d-flex align-items-center justify-content-center">
            FOTO 3
          </Col>
          <Col className="col-6 d-none d-xl-flex bg-dark d-flex align-items-center justify-content-center">
            FOTO 4
          </Col>
        </Row>
      </div>
    </>
  );
};
export default LandingPage;

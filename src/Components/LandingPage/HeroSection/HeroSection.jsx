import { Col, Row } from "react-bootstrap";

const HeroSection = () => {
  return (
    <>
      <Row id="makeItDarker" className="p-0 m-0 w-100">
        <Col className="col-12 col-md-6 bg-foto1 d-flex align-items-center justify-content-center"></Col>
        <Col className="col-6 d-none d-md-flex bg-foto2 d-flex align-items-center justify-content-center"></Col>
        <Col className="col-6 d-none d-xl-flex bg-foto3 d-flex align-items-center justify-content-center"></Col>
        <Col className="col-6 d-none d-xl-flex bg-foto4 d-flex align-items-center justify-content-center"></Col>
      </Row>
    </>
  );
};
export default HeroSection;

import { Col, Row } from "react-bootstrap";
import {
  EnvelopeAtFill,
  Facebook,
  Instagram,
  PinMapFill,
  Whatsapp,
} from "react-bootstrap-icons";
import DedicateTo from "./DedicateTo";
import Logo2 from "../Header/Logo2";

const Footer = () => {
  return (
    <>
      <div className="border-top p-0 m-0 shadow-lg">
        <Row className="w-100 align-items-center">
          <Col className="p-5 col-12 col-xl-6 d-flex justify-content-center justify-content-xl-start align-items-center">
            <Logo2 />
          </Col>
          <Col className="d-flex col-12 col-xl-6 py-3  flex-column align-items-xl-start justify-content-center fs-5 text-secondary">
            <div className="px-5 py-1">
              <PinMapFill />
              <span className="fs-6 mx-3">via delle vie, 00, città(stato)</span>
            </div>
            <div className="px-5 py-1">
              <EnvelopeAtFill />
              <span className="fs-6 mx-3">esempio@esempio.es</span>
            </div>
            <div className="px-5 py-1">
              <Whatsapp />
              <span className="fs-6 mx-3">+0123456789</span>
            </div>
            <div className="px-5 py-1">
              <Instagram />
              <span className="fs-6 mx-3">@myInstagram</span>
            </div>
            <div className="px-5 py-1">
              <Facebook />
              <span className="fs-6 mx-3">@myFacebook</span>
            </div>
          </Col>
        </Row>
        <DedicateTo />
      </div>
    </>
  );
};
export default Footer;

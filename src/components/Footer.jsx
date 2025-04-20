import { Col, Row } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Row>
      <Col className="text-center ">
        <p className="text-center ">BootUp &copy; {currentYear}</p>
      </Col>
    </Row>
  );
};

export default Footer;

import { Col, Row } from "react-bootstrap";
import springboot from "../assets/boot.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Row>
      <Col className="text-center ">
        <p className="text-center ">bootUp &copy; {currentYear}</p>
      </Col>
    </Row>
  );
};

export default Footer;

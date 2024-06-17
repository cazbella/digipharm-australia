import { Container, Row, Col } from 'react-bootstrap';
import hero from '../../assets/images/hero.png'

const IntroSection = () => (
  <section id="intro" className="intro" style={{ margin: '20px', borderRadius: '15px', overflow: 'hidden' }}>
    <Container>
      <Row className="justify-content-md-center align-items-center">
        <Col md={6} className="intro-content">
          <h1>WE MAKE HEALTHCARE SUSTAINABLE</h1>
          <h2>The Leading For-Value Digital Healthcare Ecosystem.</h2>
          <ul>
            <li>Transforming how health technologies are funded and empowering patients to be more involved in their own care.</li>
            <li>Our smart contracting system REIMBURSE and patient reporting tool, Digihealth, provide valuable insights.</li>
            <li>Our patient reporting eco-system leverages blockchain technology.</li>
          </ul>
        </Col>
        <Col md={6}>
          <img src={hero} alt="Healthcare" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  </section>
);

export default IntroSection;

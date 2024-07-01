import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import RegisterButton from '../register_button/RegisterButton';
import './Benefits.css';

const BenefitsSection = () => (
  <section id="benefits" className="benefits">
    <Container>
      <h3 className='benefits-title'>LEARN HOW OUR PLATFORMS CAN BENEFIT YOU</h3>
      <div className="button-container">
        <RegisterButton style={{ marginBottom: '20px' }} />
      </div>
      <Row className='cards justify-content-center'>
        <Col md={4} xs={12} className="d-flex">
          <BenefitCard
            title="Payers"
            items={[
              "Share risks and avoid paying for ineffective products or services",
              "Show intervention effectiveness across multiple settings",
              "Manage budget impact and cost-effectiveness in real-time",
            ]}
          />
        </Col>
        <Col md={4} xs={12} className="d-flex">
          <BenefitCard
            title="Providers"
            items={[
              "Optimise procurement and resource allocation",
              "Provide best available therapies for patients",
              "Collect costs data in real-time",
              "Simplify value-based procurement",
            ]}
          />
        </Col>
        <Col md={4} xs={12} className="d-flex">
          <BenefitCard
            title="Manufacturers"
            items={[
              "Improve and accelerate access",
              "Find ways to boost treatment adherence and outcomes",
              "Show the value of healthcare technology",
              "Generate RWE for future development",
            ]}
          />
        </Col>
      </Row>
    </Container>
  </section>
);

const BenefitCard = ({ title, items }) => (
  <Card className="card">
    <Card.Body className="card-body">
      <Card.Title>{title}</Card.Title>
      <ul>
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </Card.Body>
  </Card>
);

export default BenefitsSection;

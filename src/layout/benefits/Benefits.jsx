import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const BenefitsSection = () => (
  <section id="benefits" className="benefits" style={{ margin: '20px', borderRadius: '15px', overflow: 'hidden', backgroundColor: '#f8f9fa' }}>
    <Container>
      <h3>LEARN HOW OUR PLATFORMS CAN BENEFIT YOU – REGISTER YOUR INTEREST</h3>
      <Row>
        <Col md={4}>
          <BenefitCard
            title="Payers"
            items={[
              "Share risks and avoid paying for ineffective products or services",
              "Show intervention effectiveness across multiple settings",
              "Manage budget impact and cost-effectiveness in real-time",
            ]}
          />
        </Col>
        <Col md={4}>
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
        <Col md={4}>
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
  <Card style={{ margin: '10px', borderRadius: '10px', overflow: 'hidden' }}>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <ul>
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </Card.Body>
  </Card>
);

export default BenefitsSection;

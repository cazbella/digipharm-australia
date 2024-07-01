import React from 'react';
import './App.css'; 
import logo from './assets/images/logo.png';
import Navbar from './layout/Navbar';
import Hero from './layout/hero/Hero';
import BenefitsSection from './layout/benefits/Benefits';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      {/* <Header /> */}
      {/* <IntroSection /> */}
      <Hero />
      <BenefitsSection />
      <AwardsSection />
      <SmartContractsSection />
    </div>
  );
};

const Header = () => (
  <header className="header">
    <div className="logo">
      <img src={logo} alt="DigiPharm Australia" />
    </div>
    <nav>
      <ul>
        <li><a href="#intro">Intro</a></li>
        <li><a href="#benefits">Benefits</a></li>
        <li><a href="#awards">Awards</a></li>
        <li><a href="#smart-contracts">Smart Contracts</a></li>
      </ul>
    </nav>
    <button className="register-button">Register your interest</button>
  </header>
);

const IntroSection = () => (
  <section id="intro" className="intro">
    <div className="intro-content">
      <h1>WE MAKE HEALTHCARE SUSTAINABLE</h1>
      <h2>The Leading For-Value Digital Healthcare Ecosystem.</h2>
      <ul>
        <li>Transforming how health technologies are funded and empowering patients to be more involved in their own care.</li>
        <li>Our smart contracting system REIMBURSE and patient reporting tool, Digihealth, provide valuable insights.</li>
        <li>Our patient reporting eco-system leverages blockchain technology.</li>
      </ul>
    </div>
  </section>
);

// const BenefitsSection = () => (
//   <section id="benefits" className="benefits">
//     <h3>LEARN HOW OUR PLATFORMS CAN BENEFIT YOU – REGISTER YOUR INTEREST</h3>
//     <div className="benefits-cards">
//       <BenefitCard title="Payers" items={[
//         "Share risks and avoid paying for ineffective products or services",
//         "Show intervention effectiveness across multiple settings",
//         "Manage budget impact and cost-effectiveness in real-time",
//       ]} />
//       <BenefitCard title="Providers" items={[
//         "Optimise procurement and resource allocation",
//         "Provide best available therapies for patients",
//         "Collect costs data in real-time",
//         "Simplify value-based procurement",
//       ]} />
//       <BenefitCard title="Manufacturers" items={[
//         "Improve and accelerate access",
//         "Find ways to boost treatment adherence and outcomes",
//         "Show the value of healthcare technology",
//         "Generate RWE for future development",
//       ]} />
//     </div>
//   </section>
// );

const BenefitCard = ({ title, items }) => (
  <div className="card">
    <h4>{title}</h4>
    <ul>
      {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  </div>
);

const AwardsSection = () => (
  <section id="awards" className="awards">
    <h3>AWARDS</h3>
    <ul>
      <li>W&F: Most Innovative Flexible Healthcare Pricing Platform in 2022</li>
      <li>Innovation in business: Best Healthcare Contracting Technology Firm – Europe</li>
      <li>UK House Of Commons Award 2018 Health IT Innovation</li>
    </ul>
  </section>
);

const SmartContractsSection = () => (
  <section id="smart-contracts" className="smart-contracts">
    <h3>6 REASONS WHY SMART CONTRACTS WORK IN HEALTHCARE</h3>
    <img src="path/to/smart-contracts-reasons.png" alt="Smart Contracts Reasons" />
    <h3>What are the 5 Transformative Use Cases for Smart Contracts in Healthcare?</h3>
    <img src="path/to/smart-contracts-usecases.png" alt="Smart Contracts Use Cases" />
    <h3>8 STEPS TO IMPLEMENT SMART CONTRACTS</h3>
    <img src="path/to/smart-contracts-steps.png" alt="Smart Contracts Steps" />
    <h3>Who Can Smart Contracts Benefit in Healthcare?</h3>
    <img src="path/to/smart-contracts-benefits.png" alt="Smart Contracts Benefits" />
  </section>
);

export default App;

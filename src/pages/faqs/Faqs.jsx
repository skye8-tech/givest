import React from "react";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import Hero1 from "../../components/layout/Hero1";
// import FaqsSection from './components/FaqsSection'

const Faqs = () => {
  return (
    <div>
      <Header />
      <Hero1 title="FAQ'S" text="Home" span="FAQ'S" />

      {/* <FaqsSection/> */}

      <Footer />
    </div>
  );
};

export default Faqs;

import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";
import Team from "../components/sections/Team";

const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles id="features" />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <Team topDivider />
      <Testimonial topDivider />
      <Cta split />
    </>
  );
};

export default Home;

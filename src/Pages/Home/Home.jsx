import React from "react";
import Banner from "../../Components/Banner/Banner";
import FeatureTrusted from "../../Components/FeatureTrusted/FeatureTrusted";
import AboutUs from "../../Components/AboutUs/AboutUs";
import OurSolutions from "../../Components/OurSolutions/OurSolutions";
import Testimonial from "../../Components/Testimonial/Testimonial";
import OurProcess from "../../Components/OurProcess/OurProcess";
import Investors from "../../Components/Investors/Investors";
import FrequentlyQuestions from "../../Components/FrequentlyQuestions/FrequentlyQuestions";

const Home = () => {
  return (
    <div>
      <div className="my-4 lg:mb-[100px] lg:mt-[150px] mt-[80px]">
        <Banner />
      </div>
      <FeatureTrusted />
      <div className=" bg-[#f3f7fb]">
        <AboutUs />
        <OurSolutions />
        <Testimonial />
        <OurProcess />
      </div>
      <Investors />
      <FrequentlyQuestions />
    </div>
  );
};

export default Home;

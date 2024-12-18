import React from "react";
import Banner from "../../Components/Banner/Banner";
import FeatureTrusted from "../../Components/FeatureTrusted/FeatureTrusted";
import AboutUs from "../../Components/AboutUs/AboutUs";

const Home = () => {
  return (
    <div>
      <div className="my-4 lg:my-[100px]">
        <Banner />
      </div>
      <FeatureTrusted />
      <AboutUs />
    </div>
  );
};

export default Home;

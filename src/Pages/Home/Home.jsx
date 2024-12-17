import React from "react";
import Banner from "../../Components/Banner/Banner";
import FeatureTrusted from "../../Components/FeatureTrusted/FeatureTrusted";

const Home = () => {
  return (
    <div>
      <div className="my-4 lg:my-[100px]">
        <Banner />
      </div>
      <FeatureTrusted />
    </div>
  );
};

export default Home;

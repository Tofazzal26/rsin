import Accordion from "./Accordion/accordion";

const OurSolutions = () => {
  return (
    <div className="container mx-auto">
      <div className="lg:py-10">
        <div className="flex lg:flex-row flex-col items-center lg:gap-[90px]">
          <div className="bg-[#eff1f5] rounded-lg relative">
            <div className="px-4 lg:py-[90px]">
              <div className="flex lg:flex-row flex-col gap-5">
                <img src="/Upper.png" alt="" className="w-[340px] h-[340px]" />
                <img
                  src="/Down.jpg"
                  alt=""
                  className="w-[340px] h-[340px] mt-4 lg:mt-[70px]"
                />
              </div>
            </div>
            <div className="bg-[#26FC0326] absolute w-[250px] h-[250px] hidden lg:block bottom-6 left-[240px]"></div>
          </div>
          <div>
            <div>
              <div className="lg:ml-2">
                <h2 className="text-[15px] mt-4 lg:mt-0 lg:text-[20px] text-[#21763F]">
                  Solutions
                </h2>
                <h2 className="text-[25px] lg:text-[42px] font-semibold lg:my-6 my-2">
                  Our Finance Solutions
                </h2>
              </div>
              <Accordion />
              <div className="mt-4 lg:mt-10">
                <div className="space-x-4 lg:text-start text-center">
                  <button className="bg-[#005397] lg:px-6 px-4 py-3 lg:py-4 font-semibold text-sm rounded-full text-white">
                    Get Started
                  </button>
                  <button className="bg-transparent border-[1px] border-[#005397] lg:px-6 px-4 py-3 lg:py-4 font-semibold text-sm rounded-full text-gray-500">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSolutions;

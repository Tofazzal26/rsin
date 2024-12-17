import InvestFinancingChart from "../InvestFinancingChart/InvestFinancingChart";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center lg:flex-row flex-col gap-4 lg:gap-[100px] justify-center">
        <div>
          <div className="flex lg:flex-row flex-col gap-2 items-center">
            <div>
              <div className="bg-[#E4FFDF] lg:w-[270px] lg:h-[290px]">
                <div className="p-4">
                  <div className="text-center flex justify-center items-center flex-col">
                    <h2 className="font-semibold text-[16px] text-gray-600">
                      Saudi Center Bank Certified
                    </h2>
                    <img src="/Logo.png" alt="" className="w-[100px]" />
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <button className="bg-[#F1FFEE52] border-[1px] text-gray-600 rounded-full px-4 font-semibold text-sm py-[5px] rotate-[15deg] translate-y-[5px]">
                        Investors
                      </button>
                      <button className="bg-[#F1FFEE52] border-[1px] text-gray-600 rotate-[-15deg] rounded-full px-4 font-semibold text-sm py-[5px]">
                        Start Investing
                      </button>
                    </div>
                    <div className="text-center flex justify-center translate-y-[10px] mr-8 items-center">
                      <img
                        src="/minilogo.png"
                        alt=""
                        className="w-[35px] py-1 border-2 rounded-full"
                      />
                    </div>
                    <div className="flex justify-between">
                      <button className="bg-[#F1FFEE52] border-[1px] text-gray-600 translate-y-[25px] rotate-[-50deg] rounded-full px-4 font-semibold text-sm py-[5px]">
                        Financing
                      </button>
                      <button className="bg-[#F1FFEE52] border-[1px] text-gray-600 rotate-[15deg] rounded-full px-4 font-semibold text-sm py-[5px] translate-y-[-10px] translate-x-[-15px]">
                        Business
                      </button>
                    </div>
                    <div className="text-center mt-4">
                      <button className="bg-[#F1FFEE52] border-[1px] text-gray-600 rounded-full px-4 font-semibold text-sm py-[5px] ">
                        Get Funded
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadow-CardShadow bg-[#f3f7fb] my-2 rounded-[10px]">
                <div className="flex items-center gap-2 px-4 py-6">
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex -space-x-4">
                      <img
                        alt=""
                        className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-300"
                        src="/banner1.png"
                      />
                      <img
                        alt=""
                        className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-300"
                        src="/banner2.png"
                      />
                      <img
                        alt=""
                        className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-300"
                        src="/banner3.png"
                      />
                      <img
                        alt=""
                        className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-300"
                        src="/banner4.png"
                      />
                    </div>
                  </div>
                  <h2 className="text-[10px] font-semibold">
                    Trusted by 15k+ investors
                  </h2>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <img
                    src="/Client.png"
                    alt=""
                    className="w-[270px] h-[240px]"
                  />
                </div>
                <div>
                  <InvestFinancingChart />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="lg:text-start text-center lg:justify-start lg:items-start flex justify-center items-center flex-col">
            <button className="font-semibold bg-[#00233F] text-[#1ee2c2] flex items-center gap-1 text-sm lg:text-[16px] px-3 lg:px-4 py-[6px] rounded-[16px]">
              <img src="/logoThree.png" alt="" className="w-[40px]" /> Islamic
              Finance, Shari’a Approved
            </button>
            <h2 className="text-[18px] lg:text-[75px] font-semibold lg:w-[700px] my-4 lg:leading-[90px]">
              Smart Investments for Verified SMEs
            </h2>
            <p className="text-gray-500 lg:w-[600px] lg:text-base text-[14px] lg:leading-[30px] font-semibold">
              Smart Investments for Verified SMEs connects investors with vetted
              small businesses, promoting informed decisions and local economic
              growth
            </p>
            <div className="flex gap-3 lg:gap-6 items-center lg:mt-6 mt-3 mb-4 lg:mb-10">
              <button className="bg-[#005397] px-3 py-3 lg:px-4 lg:py-4 text-[15px] text-white font-semibold rounded-full">
                Start Investing
              </button>
              <button className=" lg:px-6 lg:py-4 px-3 py-3 text-[15px] text-gray-700 border-[1px] border-[#005397] font-semibold rounded-full">
                Get Funded
              </button>
            </div>
            <div>
              <h2 className="font-semibold text-gray-500 flex text-sm lg:text-base items-center gap-2">
                See our{" "}
                <span className="text-gray-800 border-b-[1px] border-gray-600">
                  2,000 reviews
                </span>{" "}
                on{" "}
                <span className="text-gray-800 flex items-center gap-1">
                  {" "}
                  <img src="/star.png" alt="" className="w-[30px]" /> Trustpilot
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

const AboutUs = () => {
  return (
    <div className=" bg-[#f3f7fb]">
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col justify-center gap-4 py-4 lg:py-[100px]">
          <div>
            <div className="bg-white p-6 lg:w-[700px] lg:h-[870px] rounded-lg">
              <div className="lg:translate-y-[150px]">
                <h2 className="text-[15px] lg:text-[20px] text-[#21763F]">
                  About Us
                </h2>
                <h2 className="text-[25px] lg:text-[42px] lg:my-6 font-semibold lg:leading-[60px] lg:w-[600px]">
                  Aspired To Build A Better Financial World
                </h2>
                <p className="font-semibold lg:w-[650px] text-gray-500 mb-4 lg:text-base text-sm lg:mb-8">
                  Raqamyah is a Sharia-compliant crowdlending platform licensed
                  by the Saudi Central Bank (SAMA). It connects SMEs seeking
                  financing with investors looking for competitive returns. By
                  directly funding SMEs, investors earn profits while supporting
                  business growth and economic development. The platform’s
                  mission is to simplify and accelerate funding for small
                  businesses to help them thrive.
                </p>
                <div className="space-y-2">
                  <h2 className="font-semibold text-gray-500 lg:text-base text-sm flex items-center gap-2">
                    {" "}
                    <img
                      src="/public/bullet.png"
                      alt=""
                      className="w-[30px]"
                    />{" "}
                    Sharia-Compliant Crowdlending
                  </h2>
                  <h2 className="font-semibold text-gray-500 flex lg:text-base text-sm items-center gap-2">
                    {" "}
                    <img
                      src="/public/bullet.png"
                      alt=""
                      className="w-[30px]"
                    />{" "}
                    Empowering Business Growth
                  </h2>
                  <h2 className="font-semibold text-gray-500 lg:text-base text-sm flex items-center gap-2">
                    {" "}
                    <img
                      src="/public/bullet.png"
                      alt=""
                      className="w-[30px]"
                    />{" "}
                    Direct Investment Opportunities
                  </h2>
                  <h2 className="font-semibold text-gray-500 lg:text-base text-sm flex items-center gap-2">
                    {" "}
                    <img
                      src="/public/bullet.png"
                      alt=""
                      className="w-[30px]"
                    />{" "}
                    Regulated and Trusted
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg">
              <div className="p-4">
                <img src="/office.png" alt="office" className="" />
              </div>
            </div>
            <div className="bg-white rounded-lg mt-4 ">
              <div className="p-4 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-[#f9f9fb] flex-1">
                    <div className="p-4">
                      <img
                        src="/lower.png"
                        alt=""
                        className="w-[80px] lg:w-[100px]"
                      />
                      <h2 className="text-[15px] lg:text-[20px] lg:mt-8">
                        Lower Rates
                      </h2>
                    </div>
                  </div>
                  <div className="bg-[#f9f9fb] flex-1">
                    <div className="p-4">
                      <img
                        src="/Financing.png"
                        alt=""
                        className="w-[80px] lg:w-[100px]"
                      />
                      <h2 className="text-[15px] lg:text-[20px] lg:mt-8 ">
                        Financing up to SAR 7.5M
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#f9f9fb] flex-1">
                    <div className="p-4">
                      <img
                        src="/lower.png"
                        alt=""
                        className="w-[80px] lg:w-[100px]"
                      />
                      <h2 className="text-[15px] lg:text-[20px] lg:mt-8">
                        Faster Decision
                      </h2>
                    </div>
                  </div>
                  <div className="bg-[#f9f9fb] flex-1">
                    <div className="p-4 ">
                      <img
                        src="/Financing.png"
                        alt=""
                        className="w-[80px] lg:w-[100px]"
                      />
                      <h2 className="text-[15px] lg:text-[20px] lg:mt-8">
                        Shari’a Compliant
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

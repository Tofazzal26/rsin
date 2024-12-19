import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#FFFFFF] border-t-[1px] border-gray-100">
        <footer>
          <div className="footer p-5 lg:p-10 container mx-auto">
            <aside>
              <h2 className="text-[#005397] font-semibold text-[30px] lg:text-[50px]">
                RS<span className="text-[#36B0BE]">I</span>N
              </h2>
              <p className="text-gray-400 mt-2 lg:mt-8 lg:leading-[25px] lg:w-[390px] font-semibold text-sm">
                Disclaimer: Due to the periodic changes of information/
                requirement/ document, RSIN doesn’t provide any confirmation,
                guarantee or representation, express or implied, that the
                information contained or referenced herein is completely
                accurate or final. {" "}
                <span className="text-[#005397]">click here</span>
              </p>
            </aside>
            <nav>
              <h6 className="font-semibold text-lg text-gray-600 mb-2">
                Services
              </h6>
              <a className="link link-hover font-semibold text-sm text-gray-400">
                For Investors
              </a>
              <a className="link link-hover font-semibold text-sm text-gray-400 lg:mt-2">
                For Business
              </a>
            </nav>
            <nav>
              <h6 className="font-semibold text-lg text-gray-600 mb-2">
                Company
              </h6>
              <a className="link link-hover font-semibold text-sm text-gray-400">
                About us
              </a>
              <a className="link link-hover font-semibold text-sm text-gray-400 lg:my-2">
                How it Works
              </a>
              <a className="link link-hover font-semibold text-sm text-gray-400">
                Contact Us
              </a>
              <a className="link link-hover font-semibold text-sm text-gray-400 lg:mt-2">
                FAQ
              </a>
            </nav>
            <nav>
              <h6 className="font-semibold text-lg text-gray-600 mb-2">
                Information
              </h6>
              <a className="link link-hover font-semibold text-sm text-gray-400">
                Legal
              </a>
              <a className="link link-hover font-semibold text-sm text-gray-400 lg:my-2">
                Learn more as an Investor
              </a>
              <a className="link link-hover font-semibold text-sm text-gray-400">
                Learn More as a Borrower
              </a>
              <a className="link link-hover font-semibold text-sm text-gray-400 lg:my-2">
                Key Principles & Rules
              </a>
              <a className="link link-hover font-semibold text-sm text-gray-400">
                Complains and suggestions
              </a>
            </nav>
            <nav>
              <h6 className="font-semibold text-lg text-gray-600 mb-2">
                Action
              </h6>
              <a className="link link-hover">
                <button className="font-semibold rounded-full lg:px-6 px-4 py-3 lg:py-4  text-white bg-[#005397]">
                  Start Investing
                </button>
              </a>
              <a className="link link-hover mt-2 lg:mt-4">
                <button className="font-semibold border-[1px] border-[#005397] rounded-full lg:px-8 px-6 py-3 lg:py-4 text-gray-600">
                  Get Funded
                </button>
              </a>
            </nav>
          </div>
          <div className="container mx-auto">
            <div className="p-5 lg:p-10 ">
              <div className="flex lg:flex-row flex-col justify-between border-t-[1px] border-gray-100 pt-4 lg:pt-10">
                <div>
                  <h2 className="font-semibold text-lg text-gray-600 mb-4">
                    Contact Us
                  </h2>
                  <ul>
                    <li className="link link-hover font-semibold text-sm text-gray-500">
                      Email:{" "}
                      <span className="text-[#005397]">contactus@rsin.com</span>
                    </li>
                    <li className="link link-hover font-semibold text-sm text-gray-500 my-4">
                      Phone: <span className="text-[#005397]">8001000265</span>
                    </li>
                    <li className="flex  items-center gap-4">
                      <img src="/facebook.png" alt="" className="w-[30px]" />
                      <img src="/instagram.png" alt="" className="w-[30px]" />
                      <img src="/linkedin.png" alt="" className="w-[30px]" />
                      <img src="/twitter.png" alt="" className="w-[30px]" />
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-semibold text-lg text-gray-600 mt-4 lg:mt-0 mb-4">
                    Office Address
                  </h2>
                  <ul>
                    <li className="link link-hover font-semibold text-sm text-gray-500">
                      Address: 1st Floor, Homestead Gulshan Link Tower
                    </li>
                    <li className="link link-hover font-semibold text-sm text-gray-500">
                      DCC TA-99, Gulshan-Badda link Road, Gulshan-1,
                    </li>
                    <li className="link link-hover font-semibold text-sm text-gray-500">
                      Dhaka-1212
                    </li>

                    <li className="flex  items-center gap-2 font-semibold text-sm text-[#005397] mt-4">
                      <img src="/map.png" alt="" className="w-[30px]" />
                      <span>View Location</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex ">
                    <div>
                      <ul>
                        <li>
                          <img src="/apple.png" alt="" className="w-[150px]" />
                        </li>
                        <li>
                          <img
                            src="/play.png"
                            alt=""
                            className="w-[140px] lg:ml-1"
                          />
                        </li>
                        <li className="link link-hover lg:ml-3 font-semibold text-sm text-gray-400">
                          Get the app now
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li>
                          <img src="/qr.png" alt="" className="w-[122px]" />
                        </li>
                        <li className="link lg:ml-2 link-hover font-semibold text-sm text-gray-400">
                          Scan to downlaod
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#eff1f5]">
            <div className="container mx-auto">
              <div className="p-2 lg:py-4 lg:px-10 px-4">
                <div className="flex lg:flex-row flex-col justify-between lg:gap-0 gap-3 items-center">
                  <div>
                    <h2 className="font-semibold text-gray-600 text-sm text-center lg:text-start">
                      Copyright RSIN@2024 . All rights reserved. V-0.1.14
                    </h2>
                  </div>
                  <div className=" space-x-4 lg:space-x-8 text-center lg:text-start">
                    <span className="font-semibold text-gray-600 text-sm">
                      Terms and Conditions
                    </span>
                    <span className="font-semibold text-gray-600 text-sm">
                      Privacy policy
                    </span>
                    <span className="font-semibold text-gray-600 text-sm">
                      Cookie Settings
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

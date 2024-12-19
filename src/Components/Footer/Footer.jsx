import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#FFFFFF] border-t-[1px] border-gray-100">
        <footer className="footer p-10 container mx-auto">
          <aside>
            <h2 className="text-[#005397] font-semibold text-[30px] lg:text-[50px]">
              RS<span className="text-[#36B0BE]">I</span>N
            </h2>
            <p className="text-gray-400 mt-2 lg:mt-8 lg:leading-[25px] lg:w-[390px] font-semibold text-sm">
              Disclaimer: Due to the periodic changes of information/
              requirement/ document, RSIN doesn’t provide any confirmation,
              guarantee or representation, express or implied, that the
              information contained or referenced herein is completely accurate
              or final.  <span className="text-[#005397]">click here</span>
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
            <h6 className="font-semibold text-lg text-gray-600 mb-2">Action</h6>
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
        </footer>
      </div>
    </div>
  );
};

export default Footer;

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useState } from "react";
import AccordionQuestions from "./AccordionQuestions/AccordionQuestions";

const FrequentlyQuestions = () => {
  const [according, setAccording] = useState("Investor");

  return (
    <div className="container mx-auto">
      <div className="my-10 lg:my-[100px]">
        <div className="text-center">
          <h2 className="text-[15px] lg:text-[20px] font-semibold text-[#21763F]">
            Faq
          </h2>
          <h2 className="text-[20px] lg:text-[32px] font-semibold mt-2">
            Frequently asked questions
          </h2>
        </div>
        <div>
          <div className="text-center space-x-4 space-y-4 lg:space-y-0 lg:space-x-6 my-5 lg:my-10">
            <button
              onClick={() => setAccording("Investor")}
              className={` ${
                according === "Investor" ? "bg-[#005397] text-white" : ""
              } font-semibold border-[1px] px-4 py-3 rounded-full border-[#005397]`}
            >
              Investor
            </button>
            <button
              onClick={() => setAccording("Business")}
              className={` ${
                according === "Business" ? "bg-[#005397] text-white" : ""
              } font-semibold border-[1px] px-4 py-3 rounded-full border-[#005397]`}
            >
              Business
            </button>
            <button
              onClick={() => setAccording("Raqamyah")}
              className={` ${
                according === "Raqamyah" ? "bg-[#005397] text-white" : ""
              } font-semibold border-[1px] px-4 py-3 rounded-full border-[#005397]`}
            >
              Raqamyah
            </button>
            <button
              onClick={() => setAccording("Compliant")}
              className={` ${
                according === "Compliant" ? "bg-[#005397] text-white" : ""
              } font-semibold border-[1px] px-4 py-3 rounded-full border-[#005397]`}
            >
              Shari’a Compliant
            </button>
            <button
              onClick={() => setAccording("Finance")}
              className={` ${
                according === "Finance" ? "bg-[#005397] text-white" : ""
              } font-semibold border-[1px] px-4 py-3 rounded-full border-[#005397]`}
            >
              Finance Application
            </button>
          </div>
          <div>
            <AccordionQuestions according={according} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyQuestions;

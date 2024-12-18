import React from "react";

const Accordion = () => {
  return (
    <div>
      <div className="collapse ">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-[15px] lg:text-xl text-[#005397] font-medium border-t-2">
          Business Expansion
        </div>
        <div className="collapse-content">
          <p>
            Scale your business by adding new products, service or open new
            branch
          </p>
        </div>
      </div>
      <div className="collapse border-y-2 rounded-none">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-[15px] lg:text-xl font-medium text-[#7D89B0] ">
          Upgrade Your Premises
        </div>
        <div className="collapse-content">
          <p>
            I want to report the upload progress so I tried to use a callback
          </p>
        </div>
      </div>
      <div className="collapse ">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-[15px] lg:text-xl font-medium text-[#7D89B0]">
          Marketing
        </div>
        <div className="collapse-content">
          <p>promoting and selling products or services to consumers</p>
        </div>
      </div>
      <div className="collapse border-y-2 rounded-none">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-[15px] lg:text-xl font-medium text-[#7D89B0]">
          Purchase Equipment
        </div>
        <div className="collapse-content">
          <p>Purchase Equipment means the equipment</p>
        </div>
      </div>
      <div className="collapse ">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-[15px] lg:text-xl font-medium text-[#7D89B0]">
          Increase Inventory
        </div>
        <div className="collapse-content">
          <p> Consider offering seasonal discounts</p>
        </div>
      </div>
      <div className="collapse border-y-2 rounded-none">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-[15px] lg:text-xl font-medium text-[#7D89B0]">
          Invoice Finance
        </div>
        <div className="collapse-content">
          <p>
            Optimize inventory levels to avoid stockouts of important items.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;

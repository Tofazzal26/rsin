const AccordionQuestions = ({ according }) => {
  return (
    <div className="space-y-4">
      <div className="collapse collapse-arrow  border-t-[1px] rounded-none">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          How can i register as a n {according} ?
        </div>
        <div className="collapse-content">
          <p className="text-gray-500 font-semibold text-sm">
            The Corporate VISA Managers simplifies visa management for
            organizations, reducing administrative hassles, ensuring compliance,
            and facilitating a smooth and timely visa process for their
            employees.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow border-y-[1px]  rounded-none">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What is the maximum and minimum investment in RSIN Platform?
        </div>
        <div className="collapse-content">
          <p className="text-gray-500 font-semibold text-sm">
            At Rain we follow a tiered weekly limit system. A weekly limit is a
            cap on the total amount of an activity that you can conduct in a
            certain period of time.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How can i upgrade my account to a qualified on RSIN Platform?
        </div>
        <div className="collapse-content">
          <p className="text-gray-500 font-semibold text-sm">
            The simplest way to trade crypto in the Middle East. Rain is here to
            guide you on your journey to buy and sell Bitcoin and other
            cryptocurrencies online.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow border-y-[1px] rounded-none">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What is automatic investment?
        </div>
        <div className="collapse-content">
          <p className="text-gray-500 font-semibold text-sm">
            Investors choose how much and how often to invest, and then the
            contributions are made automatically.{" "}
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow border-b-[1px] rounded-none">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          when can i receive profits?
        </div>
        <div className="collapse-content">
          <p className="text-gray-500 font-semibold text-sm">
            You're in compliance with YouTube's monetization policies
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccordionQuestions;

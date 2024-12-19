import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

const Testimonial = () => {
  const cardData = [
    {
      name: "Razu Sardar",
      company: "Fund Seeker",
      employ: "CEO of RSM",
      rating: "/rating.png",
      day: "2 days ago",
      paragraph:
        "Fast at letting me know I got approved for the loan. Fund deposit was fast.",
    },
    {
      name: "Arlene McCoy",
      company: "Investor",
      employ: "CTO Of The Walt Disney Company",
      rating: "/rating.png",
      day: "2 days ago",
      paragraph:
        "Fast at letting me know I got approved for the loan. Fund deposit was fast.",
    },
    {
      name: "Floyd Miles",
      company: "Fund Seeker",
      employ: "MD Of Starbucks",
      rating: "/rating.png",
      day: "2 days ago",
      paragraph:
        "Fast at letting me know I got approved for the loan. Fund deposit was fast.",
    },
    {
      name: "Jane Cooper",
      company: "Fund Seeker",
      employ: "HR Of Gillette",
      rating: "/rating.png",
      day: "2 days ago",
      paragraph:
        "Fast at letting me know I got approved for the loan. Fund deposit was fast.",
    },
    {
      name: "Darlene Robertson",
      company: "Investor",
      employ: "HDO Of McDonald's",
      rating: "/rating.png",
      day: "2 days ago",
      paragraph:
        "Fast at letting me know I got approved for the loan. Fund deposit was fast.",
    },
  ];

  return (
    <div className="bg-[#005397]">
      <div className="container mx-auto">
        <div className="py-[20px] lg:py-[80px]">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center">
            <div>
              <h2 className="text-[#7CE4A1] text-[20px]">Testimonial</h2>
              <h2 className="lg:text-[42px] font-semibold text-white lg:w-[500px] mt-2 mb-0 lg:mb-4 lg:leading-[60px]">
                For nearly 07 years, people have chosen VISAThing!
              </h2>
            </div>
            <div>
              <div>
                <h2 className="font-semibold text-gray-400  flex text-sm lg:text-base lg:mb-10 items-center gap-2">
                  See our{" "}
                  <span className="text-gray-100 border-b-[1px] border-gray-600">
                    2,000 reviews
                  </span>{" "}
                  on{" "}
                  <span className="text-gray-400 flex items-center gap-1">
                    {" "}
                    <img src="/star.png" alt="" className="w-[30px]" />{" "}
                    Trustpilot
                  </span>
                </h2>
              </div>
              <div className="lg:space-x-8 space-x-4 lg:mb-0 mb-2">
                <button className="bg-white px-3 py-3 rounded-xl">
                  <HiOutlineArrowNarrowLeft size={25} color="#005397" />
                </button>
                <button className="bg-white px-3 py-3 rounded-xl">
                  <HiOutlineArrowNarrowRight size={25} color="#005397" />
                </button>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-5 gap-3 grid-cols-1">
            {cardData.map((item) => (
              <div className="bg-white rounded-xl">
                <div className=" p-2 lg:p-4">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-lg">{item?.name}</h2>
                    <button className="bg-[#A5ECBE] px-4 py-2 rounded-full font-semibold text-sm">
                      {item?.company}
                    </button>
                  </div>
                  <h2 className="font-semibold text-sm text-gray-500 my-3">
                    {item?.employ}
                  </h2>
                  <div className="flex  justify-between items-center">
                    <div className="flex items-center">
                      <img src={item?.rating} alt="" className="w-[30px]" />
                      <img src={item?.rating} alt="" className="w-[30px]" />
                      <img src={item?.rating} alt="" className="w-[30px]" />
                      <img src={item?.rating} alt="" className="w-[30px]" />
                      <img src={item?.rating} alt="" className="w-[30px]" />
                    </div>
                    <h2 className="font-semibold text-sm text-gray-500">
                      {item?.day}
                    </h2>
                  </div>
                  <p className="font-semibold text-sm w-[280px] text-gray-500 mt-6 mb-[60px]">
                    {item?.paragraph}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

import { HiArrowLongRight } from "react-icons/hi2";

const FeatureTrusted = () => {
  return (
    <div className="container mx-auto">
      <div>
        <h2 className="font-semibold flex items-center gap-2 text-gray-500">
          Feature in Trusted by <HiArrowLongRight size={30} />
        </h2>
        <div>
          <div className="flex lg:flex-row flex-col justify-between items-center">
            <img src="/company1.png" alt="" className="w-[200px]" />
            <img src="/company2.png" alt="" className="w-[200px]" />
            <img src="/company3.png" alt="" className="w-[200px]" />
            <img src="/company4.png" alt="" className="w-[200px]" />
            <img src="/company5.png" alt="" className="w-[200px]" />
            <img src="/company6.png" alt="" className="w-[200px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureTrusted;

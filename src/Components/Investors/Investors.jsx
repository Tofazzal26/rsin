const Investors = () => {
  return (
    <div className="container mx-auto">
      <div className="my-4 lg:my-[100px]">
        <div className="grid lg:grid-cols-4 gap-4 grid-cols-1 ">
          <div>
            <img
              src="/meet.png"
              alt=""
              className="lg:w-[380px] w-full h-[300px] lg:h-[350px] rounded-xl"
            />
          </div>
          <div className="bg-[#f8f8f8] rounded-xl h-[250px] lg:h-[350px]">
            <div className="p-4">
              <h2 className="text-gray-400 font-semibold">New investors</h2>
              <h2 className="text-gray-400 font-semibold">last month</h2>
              <div className="lg:translate-y-[150px]">
                <h2 className="text-[50px] lg:text-[80px] font-medium">
                  3,964
                </h2>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/girlmeet.png"
              alt=""
              className="lg:w-[380px] w-full h-[300px] lg:h-[350px] rounded-xl"
            />
          </div>
          <div className="bg-[#7CE4A1] rounded-xl  h-[250px] lg:h-[350px]">
            <div className="p-4">
              <h2 className="text-gray-500 font-semibold">
                Unique investments
              </h2>
              <h2 className="text-gray-500 font-semibold">last month</h2>
              <div className="lg:translate-y-[150px]">
                <h2 className="text-[50px] lg:text-[80px] font-medium">
                  8,457
                </h2>
              </div>
            </div>
          </div>
          <div className="bg-[#7CE4A1] rounded-xl  h-[250px] lg:h-[350px]">
            <div className="p-4">
              <h2 className="text-gray-500 font-semibold">Total invested</h2>
              <h2 className="text-gray-500 font-semibold">last month</h2>
              <div className="lg:translate-y-[150px]">
                <h2 className="text-[50px] lg:text-[80px] font-medium">
                  $7.5m
                </h2>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/money.png"
              alt=""
              className="lg:w-[380px] w-full h-[300px] lg:h-[350px] rounded-xl"
            />
          </div>
          <div className="bg-[#f8f8f8] rounded-xl  h-[250px] lg:h-[350px]">
            <div className="p-4">
              <h2 className="text-gray-400 font-semibold">Site visitors</h2>
              <h2 className="text-gray-400 font-semibold">last month</h2>
              <div className="lg:translate-y-[150px]">
                <h2 className="text-[50px] lg:text-[80px] font-medium">308k</h2>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/girl.png"
              alt=""
              className="lg:w-[380px] w-full h-[300px] lg:h-[350px] rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investors;

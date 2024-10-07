export const ContactUsForm = () => {
  return (
    <div className=" flex justify-center my-[100px]">
      <div className="box-border w-[895px] h-[895px]  flex flex-col items-center">
        <div className="w-[769px] h-[389px] pt-[14px] px-[10px]  flex flex-col gap-[20px] items-center ">
          <div className="w-[624px] flex flex-col gap-[20px] ">
            <h1 className="text-[36px] font-semibold">Contact Us</h1>
            <p className="text-gray-600 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <div className="flex w-[638px] justify-between py-[10px]">
            <div className="w-[294px] h-[133px] border-[1px]  rounded-xl p-[16px] flex flex-col gap-[10px]">
              <h1 className="text-[24px] font-semibold">Address</h1>
              <p className="text-gray-600">
                1328 Oak Ridge Drive, Saint Louis, Missouri
              </p>
            </div>
            <div className="w-[294px] h-[133px] border-[1px] rounded-xl p-[16px] flex flex-col gap-[10px]">
              <h1 className="text-[24px] font-semibold">Contact</h1>
              <p className="text-gray-600 ">
                313-332-8662 <br /> info@email.com
              </p>
            </div>
          </div>
        </div>
        <div className="w-[643px] h-[440px]  bg-gray-50 rounded-[10px]">
          <div className="mt-[29px] ml-[35px]  w-[478px] h-[385px] flex flex-col gap-[24px]">
            <div className="font-semibold text-[18px]">Leave a Message</div>
            <div>
              <div className="flex justify-between">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-[225px] h-[38px] rounded-[5px] border-[1px] pl-[20px]"
                />
                <input
                  type="text"
                  placeholder="Your Email"
                  className="w-[225px] h-[38px] rounded-[5px] border-[1px] pl-[20px]"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="border-[1px] w-[478px] h-[38px] rounded-[5px] pl-[20px] mt-[20px] "
              />
              <div className="border-[1px] w-[478px] h-[134px] rounded-[5px] pl-[20px] pt-[14px] mt-[20px] bg-white  ">
                <input type="text" placeholder="Write a message" />
              </div>
              <div className="bg-blue-500 w-[130px] h-[40px] rounded-md flex  justify-center text-white text-[14px] mt-[29px]">
                <button>Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

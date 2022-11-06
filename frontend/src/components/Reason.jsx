import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import image1 from "../assets/image 1.png";
import image2 from "../assets/image 2.png";
import image3 from "../assets/image 3.png";
const Reason = () => {
  return (
    <div className="mt-[6.372rem]  ">
      <div>
        <div className="mn-[1.624rem] w-[5rem] rounded-[7.7rem] border-b-[3px] border-[#4D270C]"></div>
        <p className="mb-[4.284rem] w-[32.5rem] font-montserrat text-[4rem] font-bold leading-[4.876rem] text-[#291507]">
          Why should you have a cat?
        </p>
        <p className="mb-[2.685rem] font-montserrat text-[1.80rem] font-medium leading-[2.194rem] text-[#291507]">
          Having a cat around you can actually trigger the release of calming chemicals in your body which lower your
          stress and anxiety levels
        </p>
        <p className="flex items-center gap-[1rem] font-montserrat text-[1.2rem] font-bold leading-[1.90rem] text-[#291507]  opacity-60 outline">
          READ MORE <HiOutlineArrowNarrowRight />
        </p>
      </div>
      <div>
        <div>
          <div>
            <img src={image2} alt="" />
          </div>
          <div>
            <img src={image1} alt="" />
          </div>
        </div>
        <div>
          <img src={image3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reason;

import catWikiLogo from "../assets/CatwikiLogo.svg";
import { ImSearch } from "react-icons/im";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div>
      <div className="border border-red-800 bg-hero-image-sm bg-cover bg-center  bg-no-repeat px-[2.9rem] py-[2.1rem] ">
        <div className="text-[#fff]">
          <p className="mb-[.73rem] font-mystery-quest text-[1.4rem] font-normal leading-[1.911rem]">CatWiki</p>
          <p className="mb-[1.82rem] w-[13.92rem] font-montserrat text-[1rem] font-medium leading-[1.219rem]">
            Get to know more about your cat breed
          </p>
          <div className=" flex w-[9.2rem] items-center rounded-[5.9rem] border border-red-800 bg-white px-[1.3rem] py-[0.8rem]">
            <input
              type="text"
              placeholder="Search"
              className="w-[100%] border-none text-[1.2rem]  leading-[1.5rem] text-[#291507] placeholder-[#291507] outline-none"
            />
            <ImSearch color="#291507" className="h-[1rem] w-[1rem] " />
          </div>
        </div>
      </div>
      <div className="px-[2.9rem] py-[1.8rem]">
        <p>Most Searched Breeds</p>
        <div></div>
        <div>
          <p>66+ Breeds For you to discover</p>
          <p>
            SEE MORE <HiOutlineArrowNarrowRight />{" "}
          </p>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

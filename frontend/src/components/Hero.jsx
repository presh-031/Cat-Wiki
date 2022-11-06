import catWikiLogo from "../assets/CatwikiLogo.svg";
import { ImSearch } from "react-icons/im";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div>
      <div className="border border-red-800 bg-hero-image-sm  bg-cover bg-center bg-no-repeat ">
        <div className="text-[#fff]">
          <p className="mb-[.73rem] font-mystery-quest text-[1.4rem] font-normal leading-[1.911rem]">CatWiki</p>
          <p className="mb-[1.82rem] w-[13.92rem] font-montserrat text-[1rem] font-medium leading-[1.219rem]">
            Get to know more about your cat breed
          </p>
          <div className="flex w-[9.2rem] items-center border border-red-800 bg-white">
            <input
              type="text"
              placeholder="Search"
              className="w-[100%] rounded-[5.9rem] border-none text-[#291507] placeholder-[#291507] outline-none"
            />
            <ImSearch color="#291507" />
          </div>
        </div>
      </div>
      <div>
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

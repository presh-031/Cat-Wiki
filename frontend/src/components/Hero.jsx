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
      <div className=" bg-[#E3E1DC] px-[2.9rem] pb-[5.4rem] pt-[1.8rem]">
        <p className=" font-montserrat text-[1.2rem] leading-[1.5rem] text-[#291507] ">Most Searched Breeds</p>
        <div className="mt-[1rem] mb-[1.7rem] w-[4rem] rounded-[7.7rem] border-b-[3px] border-[#4D270C]"></div>
        <div className="">
          <p className="w-[18.5rem] font-montserrat text-[1.8rem] font-bold leading-[2.194rem] text-[#291507]">
            66+ Breeds For you to discover
          </p>
          <p className="hidden">
            SEE MORE <HiOutlineArrowNarrowRight />{" "}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-[1.3rem] border border-red-800">
          <div className="border border-red-800">
            <img
              src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
              alt=""
              className="h-[13.477rem] w-[100%] object-cover"
            />
            <p className="mt-[1.2rem] font-montserrat text-[1.2rem] font-semibold leading-[1.463rem]">Abyssinian</p>
          </div>
          <div className="border border-red-800">
            <img
              src="https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg"
              alt=""
              className="h-[13.477rem] w-[100%] object-cover"
            />
            <p className="mt-[1.2rem] font-montserrat text-[1.2rem] font-semibold leading-[1.463rem]">Aegean</p>
          </div>
          <div className="border border-red-800">
            <img
              src="https://cdn2.thecatapi.com/images/hBXicehMA.jpg"
              alt=""
              className="h-[13.477rem] w-[100%] object-cover"
            />
            <p className="mt-[1.2rem] font-montserrat text-[1.2rem] font-semibold leading-[1.463rem]">
              American Bobtail
            </p>
          </div>
          <div className="border border-red-800">
            <img
              src="https://cdn2.thecatapi.com/images/xnsqonbjW.jpg"
              alt=""
              className="h-[13.477rem] w-[100%] object-cover"
            />
            <p className="mt-[1.2rem] font-montserrat text-[1.2rem] font-semibold leading-[1.463rem]">American Curl</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

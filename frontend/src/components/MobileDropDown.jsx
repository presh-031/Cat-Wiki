import { useDropDown } from "../contexts/dropDown";
import { IoIosClose } from "react-icons/io";
import { CgSearch } from "react-icons/cg";
import { IconContext } from "react-icons";
const MobileDropDown = () => {
  const [dropDown, actions] = useDropDown();

  return (
    <div className="absolute top-0 right-0 left-0 bg-white px-[1.80rem] pb-[3.2rem]  pt-[.7rem]">
      <div className="flex justify-end">
        <div
          onClick={actions.setDropDown}
          className=" flex h-[4rem] w-[4rem] cursor-pointer items-center justify-center rounded-[.8rem] bg-[#979797]  bg-opacity-10  "
        >
          <IconContext.Provider value={{ style: { width: "2.318rem", height: "2.24rem" } }}>
            <IoIosClose className="cursor-pointer" />
          </IconContext.Provider>
        </div>
      </div>
      <div className="mt-[3rem] flex  items-center rounded-[5.9rem] border-[1px] border-black py-[1.175rem] px-[2rem] font-montserrat text-[1.80rem]  font-medium leading-[2.194rem]  ">
        <input type="text" className=" w-[100%] outline-none " />
        <CgSearch className="" />
      </div>
      <div className="">
        <div className="flex cursor-pointer items-center rounded-[1.2rem]  p-[1.91rem] hover:bg-[#979797]  hover:bg-opacity-10">
          <p className="font-montserrat text-[1.80rem]  font-medium leading-[2.194rem]">American Bobtail</p>
        </div>
        <div className="flex cursor-pointer items-center rounded-[1.2rem] p-[1.91rem] hover:bg-[#979797]  hover:bg-opacity-10">
          <p className="font-montserrat text-[1.80rem]  font-medium leading-[2.194rem]">American Curl</p>
        </div>
        <div className="flex cursor-pointer items-center rounded-[1.2rem] p-[1.91rem] hover:bg-[#979797]  hover:bg-opacity-10">
          <p className="font-montserrat text-[1.80rem]  font-medium leading-[2.194rem]">American Shorthair</p>
        </div>
        <div className="flex cursor-pointer items-center rounded-[1.2rem] p-[1.91rem] hover:bg-[#979797]  hover:bg-opacity-10">
          <p className="font-montserrat text-[1.80rem]  font-medium leading-[2.194rem]">American Wirehair </p>
        </div>
      </div>
    </div>
  );
};

export default MobileDropDown;

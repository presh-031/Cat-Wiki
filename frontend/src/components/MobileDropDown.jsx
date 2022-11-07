import { useDropDown } from "../contexts/dropDown";
import { IoIosClose } from "react-icons/io";
import { CgSearch } from "react-icons/cg";

const MobileDropDown = () => {
  const [dropDown, actions] = useDropDown();

  return (
    <div
      onClick={actions.setDropDown}
      className="absolute top-0 right-0 left-0 border border border-red-200 border-black bg-white"
    >
      <div className="flex justify-end outline">
        <div className="border border-red-800 ">
          <IoIosClose size={"2"} className="h-[1.24rem] w-[1.318rem] border border-red-800 " />
        </div>
      </div>
      <div>
        <input type="text" />
        <CgSearch />
      </div>
      <div className="px-[1.8rem]">
        <div className="flex items-center p-[1.91rem]">
          <p>American Bobtail</p>
        </div>
        <div className="flex items-center p-[1.91rem]">
          <p>American Curl</p>
        </div>
        <div className="flex items-center p-[1.91rem]">
          <p>American Shorthair</p>
        </div>
        <div className="flex items-center p-[1.91rem]">
          <p>American Wirehair </p>
        </div>
      </div>
    </div>
  );
};

export default MobileDropDown;

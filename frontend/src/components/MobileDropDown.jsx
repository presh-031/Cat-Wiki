import { useDropDown } from "../contexts/dropDown";
import { IoIosClose } from "react-icons/io";
import { CgSearch } from "react-icons/cg";
import { IconContext } from "react-icons";
const MobileDropDown = () => {
  const [dropDown, actions] = useDropDown();

  return (
    <div
      onClick={actions.setDropDown}
      className="absolute top-0 right-0 left-0 border border border-red-200 border-black bg-white"
    >
      <div className="flex justify-end outline">
        <div className=" flex h-[4rem] w-[4rem] items-center justify-center rounded-[.8rem] bg-[#979797]  bg-opacity-10  ">
          <IconContext.Provider value={{ style: { width: "2.318rem", height: "2.24rem" } }}>
            <IoIosClose />
          </IconContext.Provider>
        </div>
      </div>
      <div className="outline">
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

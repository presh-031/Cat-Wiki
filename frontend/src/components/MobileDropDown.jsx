import { useDropDown } from "../contexts/dropDown";

const MobileDropDown = () => {
  const [dropDown, actions] = useDropDown();

  return (
    <div onClick={actions.setDropDown} className="absolute top-0 right-0 left-0 border border-black">
      <div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <input type="text" />
      <div>{/* ?Here, well have the divs that contain the suggestions as paragraphs */}</div>
    </div>
  );
};

export default MobileDropDown;

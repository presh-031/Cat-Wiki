import catWikiLogo from "../assets/CatwikiLogo.svg";
import { ImSearch } from "react-icons/im";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div>
      <div className="border border-red-800">
        <div>
          <p>CatWiki</p>
          <p>Get to know more about your cat breed</p>
          <div>
            <input type="text" placeholder="Enter your breed" />
            <ImSearch />
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

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const BreedPhoto = ({ src }) => {
  return (
    <div className="h-[100%] cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
      <LazyLoadImage effect="blur" src={src} alt="breed" className="h-[100%] w-[100%]  object-cover" />
    </div>
  );
};

export default BreedPhoto;

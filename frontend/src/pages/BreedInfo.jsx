import { useCurrentBreed } from "../stores/breed";
// import { useAllBreeds } from "../stores/allbreeds";

import Header from "../components/Header";
import BreedPhoto from "../components/BreedPhoto";
import BreedDetail from "../components/BreedDetail";
import Footer from "../components/Footer";

import { useNavigate } from "react-router-dom";

const BreedInfo = () => {
  const [currentBreed, currentBreedActions] = useCurrentBreed();
  // const [allBreeds, allBreedsActions] = useAllBreeds();
  const breed = currentBreed.currentBreed;

  const navigate = useNavigate();

  console.log(currentBreed);
  return (
    <div>
      <Header />
      <button
        className="outline"
        onClick={() => {
          navigate(-1);
        }}
      >
        Go back
      </button>
      <BreedPhoto src={breed.image.url} />
      <BreedDetail />
      <Footer />
    </div>
  );
};

export default BreedInfo;

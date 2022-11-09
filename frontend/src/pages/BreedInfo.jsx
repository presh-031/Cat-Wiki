import { useCurrentBreed } from "../stores/breed";
// import { useAllBreeds } from "../stores/allbreeds";

import Header from "../components/Header";
import BreedPhoto from "../components/BreedPhoto";
import BreedDetail from "../components/BreedDetail";
import Footer from "../components/Footer";

import { useNavigate } from "react-router-dom";

const BreedInfo = () => {
  const navigate = useNavigate();

  const [currentBreed, currentBreedActions] = useCurrentBreed();
  // const [allBreeds, allBreedsActions] = useAllBreeds();
  const breed = currentBreed.currentBreed;

  const breedInfo = {
    name: breed.name,
    description: breed.description,
    temperament: breed.temperament,
    origin: breed.origin,
    lifeSpan: breed.life_span,
    numberedDetails: {
      adaptability: breed.adaptability,
      affectionLevel: breed.affection_level,
      childFriendly: breed.child_friendly,
      grooming: breed.grooming,
      intelligence: breed.intelligence,
      healthIssues: breed.health_issues,

      socialNeeds: breed.social_needs,
      strangerFriendly: breed.stranger_friendly,
    },
  };

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
      <BreedPhoto src={breed?.image?.url} />
      <BreedDetail breedInfo={breedInfo} />
      <Footer />
    </div>
  );
};

export default BreedInfo;

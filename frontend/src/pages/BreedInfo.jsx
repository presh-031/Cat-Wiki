import { useCurrentBreed } from "../stores/breed";
import { useDropDown } from "../stores/dropDown";

import Header from "../components/Header";
import BreedPhoto from "../components/BreedPhoto";
import BreedDetail from "../components/BreedDetail";
import Footer from "../components/Footer";

import { useNavigate } from "react-router-dom";

const BreedInfo = () => {
  const [dropDown, dropDownActions] = useDropDown();
  const navigate = useNavigate();

  const [currentBreed, currentBreedActions] = useCurrentBreed();

  const breed = currentBreed.currentBreed;

  const breedInfo = {
    name: breed.name,
    description: breed.description,
    temperament: breed.temperament,
    origin: breed.origin,
    lifeSpan: breed.life_span,
    numberedDetails: [
      ["Adaptability", breed.adaptability],
      ["Affection level", breed.affection_level],
      ["Child Friendly", breed.child_friendly],
      ["Grooming", breed.grooming],
      ["Intelligence", breed.intelligence],
      ["Health issues", breed.health_issues],

      ["Social needs", breed.social_needs],
      ["Stranger friendly", breed.stranger_friendly],
    ],
    id: breed.id,
  };

  console.log(currentBreed);
  return (
    <div>
      <Header />
      <div className="flex justify-end p-[2rem] ">
        <button
          className="font-montserrat text-[1.2rem] font-bold"
          onClick={() => {
            dropDownActions.setDropDown(false);
            navigate(-1);
          }}
        >
          Go back
        </button>
      </div>
      <div>
        <div className="mx-auto h-[30.5rem] w-[30.5rem] overflow-hidden rounded-[2.4rem]">
          <BreedPhoto src={breed?.image?.url} name={breed?.name} />
        </div>
        <BreedDetail breedInfo={breedInfo} name={breed?.name} />
      </div>
      <Footer />
    </div>
  );
};

export default BreedInfo;

import { useCurrentBreed } from "../stores/breed";
import { useAllBreeds } from "../stores/allbreeds";

const BreedInfo = () => {
  const [currentBreed, currentBreedActions] = useCurrentBreed();
  const [allBreeds, allBreedsActions] = useAllBreeds();

  console.log(currentBreed);
  console.log(allBreeds);
  return <div>BreedInfo</div>;
};

export default BreedInfo;

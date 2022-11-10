import Header from "../components/Header";
import { useAllBreeds } from "../stores/allBreeds";

const AllBreeds = () => {
  const [allBreeds, allBreedsActions] = useAllBreeds();

  return (
    <div>
      <Header />

      <p>66+ Breeds For you to discover.</p>
    </div>
  );
};

export default AllBreeds;

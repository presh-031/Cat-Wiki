import axios from "axios";

import { useQuery } from "react-query";
import BreedPhoto from "./BreedPhoto";

import NumberedDetail from "./NumberedDetail";

const BreedDetail = ({ breedInfo }) => {
  const showOtherPhotos = async () => {
    const { data } = await axios.get(`/api/photos/${breedInfo.id}`);

    return data;
  };

  const { data, error, isError, isLoading } = useQuery("getBreedPhotos", showOtherPhotos);

  console.log("detail", data);

  return (
    <div>
      <p>{breedInfo.name}</p>
      <p>{breedInfo.description}</p>
      <p>
        Temperament: <span>{breedInfo.temperament}.</span>
      </p>
      <p>
        Origin: <span>{breedInfo.origin}</span>
      </p>
      <p>
        Life Span: <span> {breedInfo.lifeSpan} years </span>
      </p>
      {breedInfo.numberedDetails.map((detail) => {
        // console.log(detail);
        return <NumberedDetail title={detail[0]} value={detail[1]} />;
      })}

      {/* Other Photos */}
      <p>Other Photos</p>
      {data?.map((breed) => {
        return <BreedPhoto src={breed[0]?.url} />;
      })}
    </div>
  );
};

export default BreedDetail;

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
    <div className="mt-[2rem] border border-red-800 p-[2rem] font-montserrat text-[#291507]">
      <p className="mb-[2.5rem] text-[3.6rem] font-semibold leading-[4.388rem]">{breedInfo.name}</p>
      <p className="mb-[3.275rem] text-[1.6rem] font-medium leading-[2.194rem]">{breedInfo.description}</p>
      <p className="mb-[3.2rem] text-[1.6rem] font-bold leading-[1.95rem]">
        Temperament: <span className="font-medium">{breedInfo.temperament}.</span>
      </p>
      <p className="mb-[3.2rem] text-[1.6rem] font-bold leading-[1.95rem]">
        Origin: <span className="font-medium">{breedInfo.origin}</span>
      </p>
      <p className="mb-[3.2rem] text-[1.6rem] font-bold leading-[1.95rem]">
        Life Span: <span className="font-medium"> {breedInfo.lifeSpan} years </span>
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

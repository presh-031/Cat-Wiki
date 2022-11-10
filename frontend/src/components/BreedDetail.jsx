import axios from "axios";

import NumberedDetail from "./NumberedDetail";

const BreedDetail = ({ breedInfo }) => {
  console.log(breedInfo.numberedDetails);

  const showOtherPhotos = async () => {
    for (let i = 0; i < 8; i++) {
      const { data } = await axios.get("/api/photos/");

      return data;
    }
  };
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
      {}
    </div>
  );
};

export default BreedDetail;

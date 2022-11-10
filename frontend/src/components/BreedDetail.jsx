import NumberedDetail from "./NumberedDetail";

const BreedDetail = ({ breedInfo }) => {
  console.log(breedInfo.numberedDetails);
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
        console.log(detail);
        return <NumberedDetail title={detail[0]} value={detail[1]} />;
      })}
    </div>
  );
};

export default BreedDetail;

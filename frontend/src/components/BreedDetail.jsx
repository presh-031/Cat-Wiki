const BreedDetail = ({ breedInfo }) => {
  console.log(breedInfo);
  return (
    <div>
      <p>{breedInfo.name}</p>
      <p>{breedInfo.description}</p>
      <p>
        Temperament: <span>{breedInfo.temperament}.</span>
      </p>
    </div>
  );
};

export default BreedDetail;

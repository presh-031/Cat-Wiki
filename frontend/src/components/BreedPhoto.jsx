const BreedPhoto = ({ src }) => {
  return (
    <div className="h-[100%]">
      <img src={src} alt="breed-pic" className="h-[100%] w-[100%]  object-cover" />
    </div>
  );
};

export default BreedPhoto;

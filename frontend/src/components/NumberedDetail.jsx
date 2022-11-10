import "./NumberedDetail.css";

const NumberedDetail = ({ title, value }) => {
  const numberToTiles = (value) => {
    const mockArray = [0, 1, 2, 3, 4];
    return (
      <div className="number-to-tiles">
        {mockArray.map((el, index) => (
          <span key={index} className={el < value ? "shaded-tiles" : "unshaded-tiles"}></span>
        ))}
      </div>
    );
  };
  return (
    <div>
      <span>{title}:</span>
      <div>{numberToTiles(value)}</div>
    </div>
  );
};

export default NumberedDetail;

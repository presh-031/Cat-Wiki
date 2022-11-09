import axios from "axios";

// Fetch all breeds data for dropdown suggestions
const fetchBreeds = async () => {
  const { data } = await axios.get("/api");

  return data;
};
export default fetchBreeds;

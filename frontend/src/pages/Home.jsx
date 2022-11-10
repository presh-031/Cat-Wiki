import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MobileDropDown from "../components/MobileDropDown";
import Reason from "../components/Reason";

import fetchBreeds from "../api/fetchBreeds";
import { useQuery } from "react-query";

import { useDropDown } from "../stores/dropDown";
import { useAllBreeds } from "../stores/allBreeds";

import BreedInfo from "./BreedInfo";

const Home = () => {
  const [dropDown, actions] = useDropDown();
  const [allBreeds, allBreedsActions] = useAllBreeds();

  const { data, error, isError, isLoading } = useQuery("getBreeds", fetchBreeds);

  // if isloading and if iserror, send those states to mobiledropdown and implement the ui within the component.
  if (data) {
    allBreedsActions.setAllBreeds(data);
  }

  console.log(data);
  if (isError) {
    console.log(error);
  }

  if (isLoading) {
    console.log("loading");
  }
  console.count("homepage");
  // console.log(data);
  return (
    <div className="px-[1.8rem] pt-[2.343rem]">
      <Header />
      {dropDown.isShowing && <MobileDropDown breeds={data} />}
      <Hero
        breed1={data[Math.floor(Math.random() * data?.length)]}
        breed2={data[Math.floor(Math.random() * data?.length)]}
        breed3={data[Math.floor(Math.random() * data?.length)]}
        breed4={data[Math.floor(Math.random() * data?.length)]}
      />
      <Reason />
      <Footer />
    </div>
  );
};

export default Home;

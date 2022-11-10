import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MobileDropDown from "../components/MobileDropDown";
import Reason from "../components/Reason";

import fetchBreeds from "../api/fetchBreeds";
import { useQuery } from "react-query";

import { useDropDown } from "../stores/dropDown";

import BreedInfo from "./BreedInfo";

const Home = () => {
  const [dropDown, actions] = useDropDown();

  const { data, error, isError, isLoading } = useQuery("getBreeds", fetchBreeds);

  // if isloading and if iserror, send those states to mobiledropdown and implement the ui within the component.

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
      <Hero />
      <Reason />
      <Footer />
    </div>
  );
};

export default Home;

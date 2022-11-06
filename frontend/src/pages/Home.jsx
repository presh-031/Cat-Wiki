import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MobileDropDown from "../components/MobileDropDown";
import Reason from "../components/Reason";

import { useDropDown } from "../contexts/dropDown";

const Home = () => {
  const [dropDown, actions] = useDropDown();
  return (
    <div className="px-[1.8rem] pt-[2.343rem]">
      <Header />
      {dropDown.isShowing && <MobileDropDown />}
      <Hero />
      <Reason />
      <Footer />
    </div>
  );
};

export default Home;

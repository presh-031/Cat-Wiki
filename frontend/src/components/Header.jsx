import catWikiLogo from "../assets/CatwikiLogo.svg";

const Header = () => {
  return (
    <header className="border border-red-800 mb-[2.3rem]">
      <img src={catWikiLogo} alt="catwikilogo" />
    </header>
  );
};

export default Header;

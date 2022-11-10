import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllBreeds from "./pages/AllBreeds";
import BreedInfo from "./pages/BreedInfo";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allbreeds" element={<AllBreeds />} />
          <Route path="/breed-info" element={<BreedInfo />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

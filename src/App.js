import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Header/Footer";
import Navbar from "./Pages/Shared/Header/Navbar";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
      <Footer/>

    </div>

  );
}

export default App;

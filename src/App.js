import React ,{useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Destination } from "./pages/destination/Destination";
import { Crew } from "./pages/crew/Crew";
import { Technology } from "./pages/tech/Technology";
import { Header } from "./components/header/Header";

const App = () => {


  const handleBg = (image) => {
    const root = document.getElementById("root")
    root.style.backgroundImage = `url(${image})`
  }

  return (
    <>
      <Header />
      <main className="main-container">
        <Routes>
          <Route path="/web-space/" element={<Home handleBg={handleBg} />} index/>   
          <Route
            path="/web-space/destination"
            element={<Destination handleBg={handleBg} />}
          />
          <Route path="/web-space/crew" element={<Crew handleBg={handleBg} />} />
          <Route
            path="/web-space/technology"
            element={<Technology handleBg={handleBg} />}
          />
          <Route path="*" element={<h1>error 404</h1>} />
        </Routes>
      </main>
    </>
  );
};

export default App;

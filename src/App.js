import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./nav";
import Home from "./pages/home";
import About from "./pages/about";
import Resume from "./pages/resume";
import Research from "./pages/research";
import Footer from "./footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="resume" element={<Resume />} />
            <Route path="research" element={<Research />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;

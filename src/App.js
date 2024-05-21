import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./nav";
import Home from "./pages/home";
import About from "./pages/about";
import Research from "./pages/research";
import Projects from "./pages/projects";
import Footer from "./footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="research" element={<Research />} />
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;

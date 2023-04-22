import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Resume from "./pages/resume";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-1 col-xs-1"></div>
        <div className="col-lg-8 col-md-8 col-sm-10 col-xs-10">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </main>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-1 col-xs-1"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

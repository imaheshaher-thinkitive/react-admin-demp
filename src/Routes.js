import React from "react";
import Mainlight from "pages/Mainlight";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/mainlight" element={<Mainlight />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;

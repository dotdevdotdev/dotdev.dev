import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Discord from "./pages/Discord";
import Patreon from "./pages/Patreon";
import GitHub from "./pages/GitHub";
import AppIdeas from "./pages/AppIdeas";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/discord" element={<Discord />} />
      <Route path="/patreon" element={<Patreon />} />
      <Route path="/github" element={<GitHub />} />
      <Route path="/free-apps" element={<AppIdeas />} />
    </Routes>
  );
};

export default AppRoutes;

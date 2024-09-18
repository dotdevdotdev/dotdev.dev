import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Discord from "./pages/Discord";
import Patreon from "./pages/Patreon";
import GitHub from "./pages/GitHub";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="app-container bg-black text-white h-full flex flex-col">
        <Header />
        <main className="flex h-full flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/discord" element={<Discord />} />
            <Route path="/patreon" element={<Patreon />} />
            <Route path="/github" element={<GitHub />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

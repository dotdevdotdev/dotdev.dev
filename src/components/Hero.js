import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-400">
            Welcome to .dev
          </h1>
          <p className="text-xl mb-8">
            Building on-demand apps with AI as a community
          </p>
          <div className="space-x-4">
            <Link
              to="/github"
              className="bg-black text-blue-300 px-6 py-3 rounded-lg font-semibold border border-blue-300 hover:text-green-100 transition duration-300"
            >
              Check out our repos
            </Link>
            <Link
              to="/videos"
              className="bg-blue-300 text-black px-6 py-3 rounded-lg font-semibold border border-blue-300 hover:bg-green-100 hover:text-black transition duration-300"
            >
              Watch Videos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

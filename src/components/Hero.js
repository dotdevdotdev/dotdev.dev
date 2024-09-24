import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <img
            src={process.env.PUBLIC_URL + "/dotdev-logo-cropped.png"}
            alt="dotdev.dev logo"
            className="mx-auto mb-8"
          />
          <div className="space-x-4">
            <Link to="/github" className="btn btn-blue-outline">
              Check out our repos
            </Link>
            <Link to="/videos" className="btn btn-blue">
              Watch Videos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import { Link } from "react-router-dom";
import Page from "./Page";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
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
  );
};

export default Hero;

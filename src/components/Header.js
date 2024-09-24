import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black shadow-md fixed top-0 left-0 right-0 z-50">
      <nav id="header-nav" className="flex items-center justify-between">
        <Link to="/" className="btn btn-green-link text-4xl">
          .dev
        </Link>
        <ul className="flex">
          <li>
            <Link to="/free-apps" className="btn btn-blue-link no-padding">
              App Ideas
            </Link>
          </li>
          <li>
            <Link to="/videos" className="btn btn-blue-link no-padding">
              Videos
            </Link>
          </li>
          <li>
            <Link to="/github" className="btn btn-blue-link no-padding">
              GitHub
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

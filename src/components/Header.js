import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-green-400">
            .dev
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/videos"
                className="text-blue-300 hover:text-green-100 transition duration-300"
              >
                Videos
              </Link>
            </li>
            <li>
              <Link
                to="/github"
                className="text-blue-300 hover:text-green-100 transition duration-300"
              >
                GitHub
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

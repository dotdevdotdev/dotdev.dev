import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
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

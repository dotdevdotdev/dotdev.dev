import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-green-400 ">.dev</h3>
            <p className="text-sm">© 2023 .dev. All rights reserved.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2 text-green-400 ">
              Quick Links
            </h4>
            <ul className="text-sm">
              <li>
                <a href="/" className="hover:text-green-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-green-300">
                  About
                </a>
              </li>
              <li>
                <a href="/patreon" className="hover:text-green-300">
                  Patreon
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2 text-green-400 ">
              Resources
            </h4>
            <ul className="text-sm">
              <li>
                <a href="/videos" className="hover:text-green-300">
                  Videos
                </a>
              </li>
              <li>
                <a href="/github" className="hover:text-green-300">
                  GitHub
                </a>
              </li>
              <li>
                <a href="/goals" className="hover:text-green-300">
                  Goals
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-2 text-green-400 ">
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              {/* Add your social media icons here */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

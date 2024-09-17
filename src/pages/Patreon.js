import React from "react";

const Patreon = () => {
  return (
    <section className="py-16 bg-radial-gradient from-black via-black to-green-500">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Support Us on Patreon</h1>
        <p className="text-lg mb-8">
          Join our thriving community of AI enthusiasts and get exclusive perks
          by becoming a Patron. Your support fuels our mission to build
          cutting-edge on-demand apps with AI.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-black/80 p-6 rounded-lg border border-green-400/50 shadow-lg shadow-green-400/20">
            <h3 className="text-2xl font-semibold mb-4 text-green-400">
              AI Explorer
            </h3>
            <ul className="list-disc list-inside mb-4">
              <li>Early access to videos</li>
              <li>Exclusive Discord channel</li>
              <li>Monthly AI trends newsletter</li>
            </ul>
            <p className="font-bold text-green-400 mb-4">$5/month</p>
            <a
              href="https://www.patreon.com/your-patreon-page"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-black text-green-400 px-4 py-2 rounded-full text-center font-semibold hover:bg-green-400 hover:text-black transition-colors duration-300 border border-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)] hover:shadow-[0_0_15px_rgba(74,222,128,0.8)]"
            >
              Become a Patron
            </a>
          </div>
          <div className="bg-black/80 p-6 rounded-lg border border-green-500/50 shadow-lg shadow-green-500/20">
            <h3 className="text-2xl font-semibold mb-4 text-green-500">
              AI Innovator
            </h3>
            <ul className="list-disc list-inside mb-4">
              <li>All AI Explorer benefits</li>
              <li>Behind-the-scenes content</li>
              <li>Vote on future AI project topics</li>
            </ul>
            <p className="font-bold text-green-500 mb-4">$15/month</p>
            <a
              href="https://www.patreon.com/your-patreon-page"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-black text-green-500 px-4 py-2 rounded-full text-center font-semibold hover:bg-green-500 hover:text-black transition-colors duration-300 border border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] hover:shadow-[0_0_15px_rgba(34,197,94,0.8)]"
            >
              Become a Patron
            </a>
          </div>
          <div className="bg-black/80 p-6 rounded-lg border border-green-600/50 shadow-lg shadow-green-600/20">
            <h3 className="text-2xl font-semibold mb-4 text-green-600">
              AI Visionary
            </h3>
            <ul className="list-disc list-inside mb-4">
              <li>All AI Innovator benefits</li>
              <li>Monthly AI mentoring session</li>
              <li>Collaborate on an AI project</li>
            </ul>
            <p className="font-bold text-green-600 mb-4">$30/month</p>
            <a
              href="https://www.patreon.com/your-patreon-page"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-black text-green-600 px-4 py-2 rounded-full text-center font-semibold hover:bg-green-600 hover:text-black transition-colors duration-300 border border-green-600 shadow-[0_0_10px_rgba(22,163,74,0.5)] hover:shadow-[0_0_15px_rgba(22,163,74,0.8)]"
            >
              Become a Patron
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Patreon;

import React from "react";
import Page from "../components/Page";

const Discord = () => {
  return (
    <Page>
      <h1 className="text-4xl font-bold mb-8 text-green-400">
        Join Our Discord Community
      </h1>
      <p className="text-lg mb-8">
        Connect with fellow developers, share ideas, and get support in our
        vibrant Discord community.
      </p>
      <a
        href="https://discord.gg/your-invite-link"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-blue-300 border border-blue-300 px-8 py-3 rounded-full text-lg font-semibold hover:text-green-100 hover:border-green-100 transition-colors duration-300"
      >
        Join Discord
      </a>
    </Page>
  );
};

export default Discord;

import React, { useState, useEffect } from "react";
import { Octokit } from "@octokit/rest";

const Github = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const octokit = new Octokit();
      try {
        const response = await octokit.repos.listForUser({
          username: "dotdevdotdev",
          sort: "updated",
          per_page: 10,
        });
        setRepos(response.data);
      } catch (error) {
        console.error("Error fetching repos:", error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-green-300">
          Check out our repos
        </h1>
        <ul className="space-y-4">
          {repos.map((repo) => (
            <li
              key={repo.id}
              className="border border-green-300 p-4 rounded-lg"
            >
              <a
                href={repo.html_url}
                className="text-blue-300 hover:underline text-xl font-semibold"
              >
                {repo.name}
              </a>
              <p className="text-gray-300 mt-2">{repo.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Github;

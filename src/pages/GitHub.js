import React, { useState, useEffect, useMemo } from "react";
import { Octokit } from "@octokit/rest";
import Page from "../components/Page";

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

  const renderRepo = useMemo(() => {
    return (repo) => (
      <div key={repo.id} className="li-dualtone">
        <a
          href={repo.html_url}
          className="text-blue-300 hover:underline text-xl font-semibold"
        >
          {repo.name}
        </a>
        <p className="text-gray-300 mt-2">{repo.description}</p>
      </div>
    );
  }, []);

  return (
    <Page>
      <div className="flex flex-col gap-4 pl-2 pr-1">
        <div className="green-heading text-2xl">Check out our repos</div>
        <div className="space-y-4 flex flex-col gap-1">
          {repos.map((repo) => renderRepo(repo))}
        </div>
      </div>
    </Page>
  );
};

export default Github;

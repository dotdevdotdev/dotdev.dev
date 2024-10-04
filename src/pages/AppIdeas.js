import React, { useState, useEffect } from "react";
import axios from "axios";
import Page from "../components/Page";
import { apiRoute } from "../utils/utils";
const AppIdeas = () => {
  const [ideas, setIdeas] = useState([]);
  const [newIdea, setNewIdea] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchIdeas();
  }, []);

  const fetchIdeas = async () => {
    try {
      const response = await axios.get("/api/ideas");
      setIdeas(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching ideas:", error);
      setError("Failed to fetch ideas");
      setLoading(false);
    }
  };

  const submitIdea = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://www.apiofdreams.com/v1/new-app-idea", {
        idea: newIdea,
      });
      setNewIdea("");
      fetchIdeas();
    } catch (error) {
      console.error("Error submitting idea:", error);
      setError("Failed to submit idea");
    }
  };

  const voteForIdea = async (ideaId) => {
    try {
      await axios.post("/api/votes", { ideaId });
      fetchIdeas();
    } catch (error) {
      console.error("Error voting for idea:", error);
      setError("Failed to vote for idea");
    }
  };

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-white">Error: {error}</div>;
  }

  return (
    <Page>
      <h1 className="green-heading text-2xl">App Ideas</h1>
      <form onSubmit={submitIdea} className="mb-8">
        <input
          type="text"
          value={newIdea}
          onChange={(e) => setNewIdea(e.target.value)}
          placeholder="Enter your app idea"
          className="input-default"
          required
        />
        <div className="flex justify-end">
          <button type="submit" className="btn-small btn-blue-link">
            Submit Idea
          </button>
        </div>
      </form>

      <div>
        {ideas.length > 0 ? (
          <div className="ul">
            {ideas.map((idea) => (
              <div key={idea._id} className="li-dualtone">
                <div>
                  <div className="h4 with-subtitle blue-heading">
                    {idea.title}
                  </div>
                  <div className="white-neon-glow subtitle">
                    Votes: {idea.votes}
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => voteForIdea(idea._id)}
                    className="btn-small btn-green"
                  >
                    Vote
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-white">No ideas found.</div>
        )}
      </div>
    </Page>
  );
};

export default AppIdeas;

import React, { useState, useEffect } from "react";
import axios from "axios";

const FreeApps = () => {
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
      await axios.post("/api/ideas", { title: newIdea });
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
    <section className="flex-grow pt-16 bg-black">
      <div className="flex-grow h-full container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-white">App Ideas</h1>

        <form onSubmit={submitIdea} className="mb-8">
          <input
            type="text"
            value={newIdea}
            onChange={(e) => setNewIdea(e.target.value)}
            placeholder="Enter your app idea"
            className="input-default"
            required
          />
          <button type="submit" className="btn-blue-outline mt-2">
            Submit Idea
          </button>
        </form>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Top App Ideas
          </h2>
          {ideas.length > 0 ? (
            <ul>
              {ideas.map((idea) => (
                <li
                  key={idea._id}
                  className="mb-4 p-4 border border-solid border-green-300 rounded bg-black text-white"
                >
                  <h3 className="text-xl font-semibold">{idea.title}</h3>
                  <p>Votes: {idea.votes}</p>
                  <button
                    onClick={() => voteForIdea(idea._id)}
                    className="btn-green-solid mt-2"
                  >
                    Vote
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-white">No ideas found.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FreeApps;

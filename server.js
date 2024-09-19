require("dotenv").config();
const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

let db;

async function connectToDatabase() {
  try {
    await client.connect();
    db = client.db("app_ideas");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}

app.get("/api/ideas", async (req, res) => {
  try {
    const ideas = await db
      .collection("ideas")
      .find()
      .sort({ votes: -1 })
      .toArray();
    res.json(ideas);
  } catch (error) {
    console.error("Error fetching ideas:", error);
    res.status(500).json({ error: "Error fetching ideas" });
  }
});

app.post("/api/ideas", async (req, res) => {
  try {
    const { title } = req.body;
    const result = await db.collection("ideas").insertOne({ title, votes: 0 });
    res.status(201).json({ _id: result.insertedId, title, votes: 0 });
  } catch (error) {
    console.error("Error submitting idea:", error);
    res.status(500).json({ error: "Error submitting idea" });
  }
});

app.post("/api/votes", async (req, res) => {
  try {
    const { ideaId } = req.body;
    const result = await db
      .collection("ideas")
      .updateOne({ _id: new ObjectId(ideaId) }, { $inc: { votes: 1 } });
    if (result.modifiedCount === 0) {
      return res.status(404).json({ error: "Idea not found" });
    }
    res.status(200).json({ message: "Vote recorded successfully" });
  } catch (error) {
    console.error("Error recording vote:", error);
    res.status(500).json({ error: "Error recording vote" });
  }
});

async function startServer() {
  await connectToDatabase();
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

startServer().catch((error) => {
  console.error("Failed to start the server:", error);
  process.exit(1);
});

process.on("SIGINT", async () => {
  console.log("Shutting down gracefully");
  await client.close();
  process.exit(0);
});

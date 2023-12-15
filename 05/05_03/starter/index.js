const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

// Open AI configuration

app.get("/", async (_, res) => {
  return res.status(200).send("<h1>AI-Chatbot 🤖</h1>");
});

// Endpoint to send a prompt
app.post("/ask", async (req, res) => {
  // define the prompt
  return res.status(200).send({ message: "message from API" });
});

app.listen(port, () => console.log(`Server is running on port ${port}!!`));

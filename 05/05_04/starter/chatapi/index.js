const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const { Configuration, OpenAIApi } = require("openai");

// Open AI configuration
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

app.get("/", async (_, res) => {
  return res.status(200).send("<h1>AI-Chatbot 🤖</h1>");
});

// Endpoint to send a prompt
app.post("/ask", async (req, res) => {
  // define the prompt
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "Hello world" },
    ],
  });
  console.log(completion.data.choices[0].message);
  return res.status(200).send({ message: completion.data.choices[0].message });
});

app.listen(port, () => console.log(`Server is running on port ${port}!!`));


import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { Configuration, OpenAIApi } from "openai";

const app = express();

// Open AI configuration
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 4000;

app.get("/", async (_, res) => {
  return res.status(200).send("<h1>AI-Chatbot 🤖</h1>");
});

// Endpoint to send a prompt
app.post("/ask", async (req, res) => {
  // define the prompt
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: req.body.messages,
  });

  return res.status(200).send({
    messages: [...req.body.messages, completion.data.choices[0].message],
  });
});

app.listen(port, () => console.log(`Server is running on port ${port}!!`));

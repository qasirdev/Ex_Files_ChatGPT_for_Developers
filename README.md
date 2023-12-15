# PROJECT : AI-Chatbot 🤖

### [1]- Download starter project

#### [1.1] - Install libraries

`npm install`

- **dotenv**: a module to load environment variables from a `.env` file
- **express**: a Node.js framework to create and run a Node server
- **nodemon**: a tool to restart the server automatically on file changes
- **cors**: a middleware to handle requests from different origins
- **openai**: a Node.js library to make requests to completion APIs and language models

#### [1.2] Add an API KEY - [Api Keys](https://platform.openai.com/account/api-keys)

inside the **.env** file, add your unique key

```
# your unique API key value goes here
OPENAI_API_KEY=sk-############

```

#### [1.3] Start the project

`npm run start`

### [2]- Send prompts and make requests

```
curl -X POST \
  http://localhost:4000/ask \
  -H 'Content-Type: application/json' \
  -d '{ "content": "Hello world" }'
```

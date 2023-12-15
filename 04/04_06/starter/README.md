# Create a REST API

### requirements :

- install [Node](https://nodejs.org/en)

### 1) - Create project

`mkdir api && cd api`

`npm init -y`

`touch index.js`

### 2) - Install libraries

`npm install express cors nodemon`

- **cors**: to enable requests from different origins

- **express**: a Node.js framework to create and run a Node server

- **nodemon**: a tool to restart the server automatically on file changes

### 3) - Run the project and test the routes

`npm run start`

test with curl or [Postman](https://www.postman.com/downloads/)

#### GET request:

```
curl -v http://localhost:4000/notes
```

#### POST request:

```
curl -X POST \
  http://localhost:4000/notes\
  -H 'Content-Type: application/json' \
  -d '{ "text": "learn openai" }'
```

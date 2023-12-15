const express = require("express");
const app = express();
app.use(express.json());

app.use(cors());

let items = [];

app.get("/", (_, res) => {
  res.json("Welcome to the API");
});

// Get all items
app.get("/items", (_, res) => {
  res.json(items);
});

// Get a single item by id
app.get("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item)
    return res.status(404).send("The item with the given ID was not found.");
  res.json(item);
});

// Create a new item
app.post("/items", (req, res) => {
  const item = {
    id: Number(new Date()),
    ...req.body,
  };
  items.push(item);
  res.json(items);
});

// Update an existing item
app.put("/items/:id", (req, res) => {
  let item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item)
    return res.status(404).send("The item with the given ID was not found.");

  item.completed = !item.completed;
  res.json(items);
});

// Delete an item
app.delete("/items/:id", (req, res) => {
  const itemIndex = items.findIndex((i) => i.id === parseInt(req.params.id));
  if (itemIndex === -1)
    return res.status(404).send("The item with the given ID was not found.");

  items.splice(itemIndex, 1);
  res.json(items);
});

// Starting the server
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

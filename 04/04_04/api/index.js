const express = require("express");
const app = express();
app.use(express.json());

let items = [];

app.get("/", (req, res) => {
  res.json("Welcome to the API");
});

// Get all items
app.get("/items", (req, res) => {
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
    id: items.length + 1,
    ...req.body,
  };
  items.push(item);
  res.json(item);
});

// Update an existing item
app.put("/items/:id", (req, res) => {
  let item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item)
    return res.status(404).send("The item with the given ID was not found.");

  item.completed = !item.completed;
  res.json(item);
});

// Delete an item
app.delete("/items/:id", (req, res) => {
  const itemIndex = items.findIndex((i) => i.id === parseInt(req.params.id));
  if (itemIndex === -1)
    return res.status(404).send("The item with the given ID was not found.");

  items.splice(itemIndex, 1);
  res.json({ message: "Item has been deleted" });
});

// Starting the server
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

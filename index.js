const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Simple Brand Shop CRUD is Running");
});

app.listen(port, () => {
  console.log(`Simple crud is running on port :,${port}`);
});

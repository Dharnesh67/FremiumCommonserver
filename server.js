const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Our common Server is running!");
});
app.get("/Can", (req, res) => {
  res.send("Our common Server is Can Change!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

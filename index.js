import express from "express";

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Server is running succesfully!");
});

app.get("/api", (req, res) => {
    res.json({
        message: "Hello from Node.js server"
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
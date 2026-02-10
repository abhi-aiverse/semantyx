import express from "express";

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (_req, res) => {
  res.send("SEMANTYX v1 is running");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

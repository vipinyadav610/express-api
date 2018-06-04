import express from "express";
const app = express();
app.get("/api", (req, res) => {
  res.send({
    message: "I am a serve route and can also be hot !"
  });
});
export default app;

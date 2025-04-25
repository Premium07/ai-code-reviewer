import express from "express";
import aiRoutes from "./routes/ai.routes.js";
import cors from "cors";
import job from "./config/cron.js";

job.start();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the server" });
});

app.use("/ai", aiRoutes);

export default app;

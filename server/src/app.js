import express from "express";
import aiRoutes from "./routes/ai.routes.js";
import cors from "cors";

const app = express();

const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? ["https://your-frontend-vercel-url.vercel.app"]
      : ["http://localhost:5173"], // Include Vite's default port
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/ai", aiRoutes);

export default app;

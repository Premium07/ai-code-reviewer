import { configDotenv } from "dotenv";
import app from "./src/app.js";
configDotenv();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

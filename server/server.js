import { configDotenv } from "dotenv";
import app from "./src/app.js";
configDotenv();
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

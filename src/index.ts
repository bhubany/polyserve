import "dotenv/config";
import express from "express";
import "module-alias/register";
import "reflect-metadata";
import "./config/di-container";
import routes from "./routes";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/v1", routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

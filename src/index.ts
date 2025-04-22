import cookieParser from "cookie-parser";
import "dotenv/config";
import express from "express";
import "module-alias/register";
import "reflect-metadata";
import "./config/di-container";
import routes from "./routes";
import { authGuard } from "./security/middleware/auth.guard";

const app = express();
const port = process.env?.APP_PORT ?? 3000;

app.use(cookieParser());

app.use(express.json());

app.use("/api/v1", authGuard, routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

import bodyParser from "body-parser";
import express, { Request, Response } from "express";
import "reflect-metadata";
import routes from "./routes";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/api/v1", routes);

// check health of API
app.get("/", async (req: Request, resp: Response) => {
  resp.send("Server is up");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

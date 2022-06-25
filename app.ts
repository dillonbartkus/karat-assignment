import express, { Express, Request, Response } from "express";
// @ts-ignore
import jsonGraphqlExpress from "json-graphql-server";
import cors from "cors";

const data = require("./mocks/userData");

const app: Express = express();
const port: Number = 3001;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use('/user', jsonGraphqlExpress(data));

app.listen(port);
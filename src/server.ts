import "dotenv/config";
import cors from "cors";
import express, { type Request, type Response } from "express";
import { rootRouter } from "./routes/index.js";

const app = express();
const port = process.env.PORT ?? 3333;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use("/v1", rootRouter);

app.listen(port, () => {
  console.log(`Server running in port: ${port}, http://localhost:${port} `);
});

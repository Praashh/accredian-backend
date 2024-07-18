import express, { Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import rootRouter from "./routes/index"
const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:8080",
  credentials: true
}));
console.log("jbsd")
app.use(cookieParser())
app.use(express.json());

app.use("/api/v1", rootRouter);

app.get("/", (req, res:Response) => {
  res.send("Working Fine");
})

app.listen(3001, () => {
  console.log(`Server is running on port http://localhost:3001`);
});
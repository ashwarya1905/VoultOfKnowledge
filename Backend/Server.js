import express from "express";
import cors from "cors";
import "dotenv/config";
import BookRoute from "./Routes/BookRoute.js";
import DbConfig from "./Config/DbConfig.js";

let app = express();
app.use(cors());
app.use(express.json());

DbConfig(); 

app.get("/", (req, res) => {
  res.json({
    "message": "Server is running",
  });
});

app.use("/api/books", BookRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

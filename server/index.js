import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/postsRoutes.js";

import dotenv from "dotenv";

const app = express();
dotenv.config();

// localhost:5000/posts

//general setup
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

//Add server port
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect!`));

mongoose.set("useFindAndModify", false);

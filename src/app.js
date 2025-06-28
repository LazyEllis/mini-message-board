import express from "express";
import path from "path";
import indexRouter from "./routes/indexRouter.js";

const app = express();
const assetsPath = path.join(import.meta.dirname, "public");

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

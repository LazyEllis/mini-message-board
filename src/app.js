import express from "express";
import path from "path";
import "dotenv/config";
import indexRouter from "./routes/indexRouter.js";
import newMessageRouter from "./routes/newMessageRoute.js";

const app = express();
const assetsPath = path.join(import.meta.dirname, "public");

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use("/new", newMessageRouter);
app.use("/", indexRouter);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  res
    .status(err.statusCode || 500)
    .render("error", { message: err.statusCode && err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

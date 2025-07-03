import { Router } from "express";
import { getMessages, getMessage } from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/", getMessages);

indexRouter.get("/:id", getMessage);

export default indexRouter;

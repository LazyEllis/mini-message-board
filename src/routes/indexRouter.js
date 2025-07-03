import { Router } from "express";
import {
  getMessages,
  getMessage,
  render404Page,
} from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/", getMessages);

indexRouter.get("/:id", getMessage);

indexRouter.get("/*splat", render404Page);

export default indexRouter;

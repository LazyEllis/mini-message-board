import { Router } from "express";
import {
  createMessage,
  renderNewMessageForm,
} from "../controllers/newMessageController.js";

const newMessageRouter = Router();

newMessageRouter.get("/", renderNewMessageForm);

newMessageRouter.post("/", createMessage);

export default newMessageRouter;

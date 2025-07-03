import { Router } from "express";
import {
  createMessage,
  renderNewMessageForm,
} from "../controllers/newMessageController.js";
import { handleValidation, validateMessage } from "../middleware/validation.js";

const newMessageRouter = Router();

newMessageRouter.get("/", renderNewMessageForm);

newMessageRouter.post(
  "/",
  validateMessage,
  handleValidation("form"),
  createMessage,
);

export default newMessageRouter;

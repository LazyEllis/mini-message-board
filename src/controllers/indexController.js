import { getAllMessages, getMessageById } from "../db/queries.js";
import NotFoundError from "../errors/NotFoundError.js";
import formatTimestamp from "../utils/formatTimestamp.js";

export const getMessages = async (req, res) => {
  const messages = await getAllMessages();
  res.render("index", { messages, formatTimestamp });
};

export const getMessage = async (req, res) => {
  const { id } = req.params;
  const message = await getMessageById(id);

  if (!message) {
    throw new NotFoundError("Message Not Found");
  }

  res.render("message", { message, formatTimestamp });
};

export const render404Page = (req, res) => {
  res.status(404).render("error", { message: "Page Not Found" });
};

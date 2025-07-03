import { getAllMessages, getMessageById } from "../db/queries.js";
import formatTimestamp from "../utils/formatTimestamp.js";

export const getMessages = async (req, res) => {
  const messages = await getAllMessages();
  res.render("index", { messages, formatTimestamp });
};

export const getMessage = async (req, res) => {
  const { id } = req.params;
  const message = await getMessageById(id);
  res.render("message", { message, formatTimestamp });
};

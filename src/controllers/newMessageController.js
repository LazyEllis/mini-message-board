import { createNewMessage } from "../db/queries.js";

export const renderNewMessageForm = (req, res) => {
  res.render("form");
};

export const createMessage = async (req, res) => {
  const { content, author } = req.body;
  await createNewMessage(content, author);
  res.redirect("/");
};

import { Router } from "express";

const indexRouter = Router();

const messages = [
  {
    id: crypto.randomUUID(),
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: crypto.randomUUID(),
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", (req, res) => {
  const { text, user } = req.body;

  messages.push({ id: crypto.randomUUID(), text, user, added: new Date() });
  res.redirect("/");
});

indexRouter.get("/:messageId", (req, res) => {
  const { messageId } = req.params;

  const message = messages.find((message) => message.id === messageId);
  res.render("message", { message });
});

export default indexRouter;

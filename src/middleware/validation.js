import { body, validationResult } from "express-validator";

export const validateMessage = [
  body("content", "The content of the message must not be empty")
    .trim()
    .notEmpty(),
  body("author", "The message must be assigned an author").trim().notEmpty(),
];

export const handleValidation = (view) => (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).render(view, {
      errors: errors.array(),
      data: req.body,
    });
  }

  next();
};

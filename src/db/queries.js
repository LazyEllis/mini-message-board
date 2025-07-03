import pool from "./pool.js";

export const getAllMessages = async () => {
  const { rows } = await pool.query(
    "SELECT * FROM messages ORDER BY created_at",
  );
  return rows;
};

export const getMessageById = async (id) => {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);
  return rows[0];
};

export const createNewMessage = async (content, author) => {
  await pool.query("INSERT INTO messages (content, author) VALUES ($1, $2)", [
    content,
    author,
  ]);
};

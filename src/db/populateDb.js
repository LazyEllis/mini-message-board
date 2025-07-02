#! /usr/bin/env node

import { Client } from "pg";

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  content TEXT NOT NULL,
  author TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO messages (content, author, created_at) 
VALUES
  ('Hi there!', 'Amando', '2025-06-29T18:30:14.000Z'),
  ('Hello World!', 'Charles', '2025-06-29T18:30:14.000Z'),
  ('Up The Chels #KTBFFH', 'Emmanuel', '2025-06-29T18:35:57.000Z'),
  ('hello', 'msn', '2025-06-29T19:48:09.000Z'),
  ('May you find focus and peace in your studies.', 'Quel', '2025-06-29T23:49:35.000Z'),
  ('Free palestine', 'Palestine', '2025-06-30T00:14:05.000Z'),
  ('Hello there', 'Shahryar Salmaan', '2025-06-30T00:39:40.000Z'),
  ('Hello there', 'Taki', '2025-06-30T00:41:58.000Z'),
  ('iudhawuidhad', 'jakub', '2025-06-30T08:45:09.000Z'),
  ('nice project', 'jakub', '2025-06-30T08:45:16.000Z'),
  ('hey', 'huan', '2025-06-30T10:14:26.000Z'),
  ('khjkhjk', 'jlkjh', '2025-06-30T13:54:48.000Z'),
  ('hello, cool stuff!', 'mango lover', '2025-06-30T21:05:40.000Z'),
  ('Just checking 😀', 'Chloe', '2025-07-01T03:30:03.000Z'),
  ('This is cool dawg 😁 well done!!v', 'Chloe', '2025-07-01T03:30:28.000Z'),
  ('Honestly, interesting.', 'Ramon.cvc on INSTAGRAM', '2025-07-01T18:22:23.000Z'),
  ('very peak, anyway IT''S NOT GOJOVER!!! HE WILL COME BACK IM SURE 😭😭😭😭', 'exprenza', '2025-07-01T23:57:40.000Z'),
  ('What up GXNG', 'LazyTurtle', '2025-07-02T21:08:27.000Z');
`;

const main = async () => {
  console.log("Seeding...");
  const client = new Client({
    connectionString: process.argv[2],
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Done");
};

main();

# Mini Message Board

A simple message board web app built with Node.js, Express, and EJS.

## Features

- View all messages
- Send new messages
- View individual messages
- Form validation and error handling
- Responsive and clean UI

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher)
- [PostgreSQL](https://www.postgresql.org/) database

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/LazyEllis/mini-message-board.git
   cd mini-message-board
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add your PostgreSQL connection string:
     ```
     DATABASE_URL=postgres://user:password@localhost:5432/your_db
     ```

4. **Seed the database:**

   ```sh
   node src/db/populateDb.js $DATABASE_URL
   ```

5. **Start the app:**
   ```sh
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

### Development

- Run in watch mode:
  ```sh
  npm run dev
  ```
- Lint code:
  ```sh
  npm run lint
  ```
- Format code:
  ```sh
  npm run format
  ```
- Run tests:
  ```sh
  npm test
  ```

## Project Structure

```
src/
  app.js                # Main Express app
  controllers/          # Route controllers
  db/                   # Database connection and queries
  errors/               # Custom error classes
  middleware/           # Express middleware
  public/               # Static assets (CSS, images)
  routes/               # Express routers
  utils/                # Utility functions
  views/                # EJS templates
```

## Contributing

Contributions are welcome! Please open issues or submit pull requests.

## License

MIT License © 2025

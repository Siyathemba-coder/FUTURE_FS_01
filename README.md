# Siyathemba Msimang — Portfolio

A personal developer portfolio with a live contact form backed by Node.js and MongoDB.

## Features

- Responsive single-page portfolio (HTML/CSS/JS)
- Contact form that saves messages to MongoDB
- Express REST API with Mongoose
- Environment-based configuration via `.env`

## Project Structure

```
Task_1_connected/
├── Frontend/
│   └── portfolio.html        # Single-page portfolio
├── Backend/
│   ├── models/
│   │   └── Message.js        # Mongoose schema
│   ├── routes/
│   │   └── contact.js        # POST /api/contact
│   ├── server.js             # Express entry point
│   ├── package.json
│   └── .env.example          # Environment variable template
└── LICENSE
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (LTS)
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (free tier works)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Siyathemba-coder/<repo-name>.git
   cd <repo-name>/Backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Open `.env` and fill in your MongoDB connection string:
   ```
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
   PORT=5000
   ```

4. **Start the server**
   ```bash
   npm run dev
   ```
   You should see:
   ```
   Server running on port 5000
   MongoDB connected
   ```

5. **Open the portfolio**

   Open `Frontend/portfolio.html` in your browser. The contact form will now POST to the running backend and save messages to your MongoDB database.

## API

| Method | Endpoint       | Description              |
|--------|----------------|--------------------------|
| POST   | /api/contact   | Save a contact message   |

**Request body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Opportunity",
  "message": "Hi Siyathemba..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

## Environment Variables

| Variable   | Description                        |
|------------|------------------------------------|
| MONGO_URI  | MongoDB Atlas connection string    |
| PORT       | Port the server runs on (default 5000) |

> Never commit your `.env` file. It is listed in `.gitignore`.

## License

This project is licensed under the [MIT License](LICENSE).

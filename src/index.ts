import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/message", (req: Request, res: Response) => {
  res.json({ message: "Hello from API!" });
});

app.get("/health", (req: Request, res: Response) => {
  console.log("health check worked !!");
  res.json({ status: "OK" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

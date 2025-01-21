import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 1115;

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://127.0.0.1:5500" })); // Adjust as needed

// Database Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", () => console.log("Mongoose connected."));
mongoose.connection.on("error", (err) => console.error("Mongoose error:", err));

// Routes
app.use("/api/users", userRoutes);

// Start Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
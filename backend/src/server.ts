import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { authRoutes } from "./routes/auth.routes";
import { taskRoutes } from "./routes/task.routes";

dotenv.config();
const baseAuthRoute = "/api/auth"
const baseTaskRoute = "/api/tasks"

const app = express();
app.use(cors());
app.use(express.json());
app.use(baseAuthRoute, authRoutes)
app.use(baseTaskRoute, taskRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
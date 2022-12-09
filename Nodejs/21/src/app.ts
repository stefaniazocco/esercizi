import express from "express";
import "express-async-errors";
import { validationErrorMiddleware } from "./lib/middleware/validation";
import { initCorsMiddleware } from "./lib/middleware/cors";
import userRoutes from "./routes/users";

const app = express();
app.use(express.json());
app.use(initCorsMiddleware());

app.use("/users", userRoutes);

app.use(validationErrorMiddleware);

export default app;

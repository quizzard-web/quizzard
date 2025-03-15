import { verifyAccessToken } from "./routes/middlewares";
import apiRoutes from "./routes/api";
import authRoutes from "./routes/auth";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

const app = express();

app.listen(3000, () => console.log("app is running"));

/**
 * Register third-party middlewares
 */
app.use(cookieParser());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));

/**
 * Register custom route middlewares
 */
app.use("/api", verifyAccessToken);

/**
 * Register routes
 */
app.use("/auth", authRoutes);
app.use("/api", apiRoutes);


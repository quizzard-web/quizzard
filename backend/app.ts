import { isAuthenticated } from "./routes/middlewares";
import apiRoutes from "./routes/api";
import authRoutes from "./routes/auth";
import cors from "cors";
import express from "express";
import indexRoutes from "./routes";
import MongoStore from "connect-mongo";
import passport from "passport";
import session from "express-session";

const app = express();

app.listen(3000, () => console.log("app is running"));

/**
 * Register third-party middlewares
 */
const store = MongoStore.create({
    mongoUrl: process.env.DATABASE_URL,
    collectionName: "Session",
});

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    store,
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 30 // 30 minutes
    }
}));

app.use(passport.authenticate("session"));

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));

/**
 * Register custom route middlewares
 */
app.use("/api", isAuthenticated);

/**
 * Register routes
 */
app.use("/", indexRoutes);
app.use("/auth", authRoutes);
app.use("/api", apiRoutes);


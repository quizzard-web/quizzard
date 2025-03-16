import { NextFunction, Request, Response } from "express";

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    if (!req.isAuthenticated()) {
        res.status(401).json({ message: "Unauthenticated."})
    } else {
        next();
    }
}
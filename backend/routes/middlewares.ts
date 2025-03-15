import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export const verifyAccessToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers["authorization"]?.split(" ")[1];

    try {
        const decodedData = jwt.verify(token || "", process.env.JWT_SECRET) as JwtPayload;
        req.user = decodedData;
        next();
    } catch (e) {
        res.status(401).json({
            message: "Token is invalid or expired."
        });
    }
};

export const verifyRefreshToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies?.refreshToken;

    try {
        const decodedData = jwt.verify(token || "", process.env.JWT_SECRET) as JwtPayload;
        req.user = decodedData;
        next();
    } catch (e) {
        res.status(401).json({
            message: "Token is invalid or expired."
        });
    }
}

declare namespace Express {
    export interface User {
        jwtAccessToken?: string;
        jwtRefreshToken?: string;
    }

    export interface Request {
        user?: import("jsonwebtoken").JwtPayload;
    }
}

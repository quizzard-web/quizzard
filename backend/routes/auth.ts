import _ from "lodash";
import { prisma } from "../prisma/prismaClient";
import { Router } from "express";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import jwt from "jsonwebtoken";
import passport from "passport";
import { verifyAccessToken, verifyRefreshToken } from "./middlewares";

const router = Router();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/oauth2/redirect/google",
    scope: ["profile", "email"],
  },
  async function(accessToken, refreshToken, profile, cb) {
    try {
        let user = await prisma.user.findFirst({ where: {
            federatedCredentials: {
                some: {
                    provider: "google",
                    providerSubjectId: profile.id
                }
            }
        }});
    
        if (_.isNull(user)) {
            user = await prisma.user.create({
                data: {
                    firstName: profile.displayName,
                    lastName: profile.name?.familyName,
                    email: profile._json.email,
                    gender: "man", // temporarily hardcoded, need to use google people api
                    settings: {
                        receiveNewsletter: false
                    },
                    federatedCredentials: [{
                        provider: "google",
                        providerSubjectId: profile.id
                    }],
                }
            })
        }

        const jwtAccessToken = jwt.sign(
            { userId: user.id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        const jwtRefreshToken = jwt.sign(
            { userId: user.id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );
    
        cb(null, { jwtAccessToken, jwtRefreshToken });
    } catch (e) {
        cb(e);
    }
  }
));

router.get("/login/federated/google", passport.authenticate("google", { session: false }));

router.get("/oauth2/redirect/google", passport.authenticate(
    "google",
    { session: false }),
    (req, res) => {
        res.cookie("refreshToken", req.user?.jwtRefreshToken, { httpOnly: true });
        res.redirect(
            process.env.CLIENT_URL + "/login?success=true&token=" + req.user?.jwtAccessToken
        );
    }
);

router.get("/accessToken", verifyRefreshToken, (req, res) => {
    const user = req.user;

    if (user) {
        const jwtAccessToken = jwt.sign(
            { userId: user.id },
            process.env.JWT_SECRET,
            { expiresIn: "1m" }
        );

        res.status(200).json({
            accessToken: jwtAccessToken
        });
    } else {
        res.send(404);
    }
})

router.post("/logout", verifyAccessToken, (req, res) => {
    res.clearCookie("refreshToken");
    res.send(200);
});

export default router;

import _ from "lodash";
import { prisma } from "../prisma/prismaClient";
import { Router } from "express";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";

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
                    accountStatus: profile._json.email_verified ? "verified" : "unverified",
                }
            })
        }

        cb(null, user);
    } catch (e) {
        cb(e);
    }
  }
));

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
        cb(null, { id: user.id });
    });
});
  
  passport.deserializeUser(function(user: Express.User, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
});

router.get("/login/federated/google", passport.authenticate("google"));

router.get("/oauth2/redirect/google", passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL + "/login?success=true",
    failureRedirect: process.env.CLIENT_URL + "/login?success=false"
}));

router.post("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) next(err);

        res.status(200).send();
    })
});

export default router;

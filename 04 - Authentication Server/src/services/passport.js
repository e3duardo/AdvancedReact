import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import User from "../models/user";
import config from "../config";

// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: config.secret
};

// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  // See if the user ID in the payload exists in our database
  User.findById(payload.sub, (err, user) => {
    if (err) return done(err, false);

    if (!user) {
      return done(null, false);
    }

    done(null, user);
  });
});

// Tell passport to use this strategy
passport.use(jwtLogin);

import passport from "passport";
import * as Authentication from "./controllers/authentication";
import passportService from "./services/passport";

const requireAuth = passport.authenticate("jwt", { session: false });

export default app => {
  app.get("/", requireAuth, (req, res) => {
    res.send({ hi: "there" });
  });
  app.post("/signup", Authentication.signup);
};

import * as Authentication from "./controllers/authentication";

export default app => {
  app.post("/signup", Authentication.signup);
};

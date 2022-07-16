// lib import
const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const session = require("express-session");
require("dotenv").config();

const config = {
  CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  COOKIE_KEY_1: process.env.COOKIE_KEY_1,
  COOKIE_KEY_2: process.env.COOKIE_KEY_2,
};
// .env import
let googleProfile = null;
const app = express();
const api = require("./routes/api");

// cors
app.use(
  cors({
    origin: "http://3.88.66.104:8000/",
  })
);
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
// Helmet Init
app.use(helmet());
function verifyCallback(accessToken, refreshToken, profile, done) {
  console.log("Google profile", profile);
  googleProfile = profile;
  done(null, profile);
}

passport.use(
  new GoogleStrategy(
    {
      clientID: config.CLIENT_ID,
      clientSecret: config.CLIENT_SECRET,
      callbackURL: "/auth/google",
    },
    verifyCallback
  )
);
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  //  User.findById(id).then(user =>{
  //     done(null.user);
  //  });
  done(null, id);
});

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["email"],
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: "/",
  }),
  (req, res) => {
    console.log("Google called us back!");
  }
);




app.use(passport.initialize());
app.use(passport.session());
app.use(morgan("combined"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/", api);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = {app, googleProfile};

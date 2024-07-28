import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import product from "./routes/productRoute.js";
import OrderRoute from "./routes/orderRoute.js";
import dotenv from 'dotenv'
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import errorMiddleware from "./middlewares/error.js";
import session from "express-session";
import passport from "passport";
import { login } from "./controller/userController.js";
import { Strategy as OAuth2Strategy } from 'passport-google-oauth2';
import { Strategy as TwitterStrategy } from 'passport-twitter'
import memorystore from 'memorystore'

const MemoryStore = memorystore(session);

dotenv.config({ path: './config/config.env' })

const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONT_END_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(fileUpload());
app.set('trust proxy', 1)
app.use(session({
  secret: "adsfjlasdfuqef",
  resave: false,
  saveUninitialized: true,
  store: new MemoryStore({
    checkPeriod: 86400000
  }),
  // key: 'sid',
  proxy: true,
  cookie: {
    secure: process.env.ENV === 'DEVELOPMENT' ? false : true,
    sameSite: process.env.ENV === 'DEVELOPMENT' ? "lax" : "none"
  }
}))

// setuppassport
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new OAuth2Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    scope: ["profile", "email"]
  },
    async (accessToken, refreshToken, profile, done) => {
      login(profile, done, "google");
    }
  )
)
passport.use(
  new TwitterStrategy({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: `/oauth/callback/twitter`,
    includeEmail: true
  },
    async (accessToken, refreshToken, profile, done) => {
      login(profile, done, "twitter");
    }
  )
)

passport.serializeUser((user, done) => {
  done(null, user);
})

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get("/auth/google/callback", passport.authenticate("google", {
  successRedirect: `${process.env.FRONT_END_URL}/auth/validate`,
  failureRedirect: `${process.env.FRONT_END_URL}/auth/signin`
}))

app.get('/auth/twitter',
  passport.authenticate('twitter', { scope: ["profile, email"] }));

app.get('/oauth/callback/twitter',
  passport.authenticate('twitter', {
    successRedirect: `${process.env.FRONT_END_URL}/auth/validate`,
    failureRedirect: `${process.env.FRONT_END_URL}/auth/signin`
  }),
);

app.use("/api/v1", product);
app.use("/api/v1", userRoute);
app.use("/api/v1", OrderRoute);

// Middleware for erros
app.use(errorMiddleware);

export default app;

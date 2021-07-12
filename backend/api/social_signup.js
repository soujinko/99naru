import express from "express";
const router = express.Router();

const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth2").Strategy;
const KakaoStrategy = require("passport-kakao").Strategy;
const GithubStrategy = require("passport-github").Strategy;

// 구글 로그인
passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: "",
      clientSecret: "",
      callbackURL: "/auth/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      // console.log("profile: ", profile);
      var user = profile;

      done(null, user);
    }
  )
);

router.get("/login", function (req, res) {
  res.render("login");
});

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email", "openid"] })
);

router.get("/google/callback", passport.authenticate("google"), authSuccess);

function authSuccess(req, res) {
  const { displayName, email } = req.user;
  console.log("social login test", displayName, email);
  res.send({});
}

// 카카오로그인
passport.use(
  "kakao",
  new KakaoStrategy(
    {
      clientID: "",
      callbackURL: "/auth/kakao/callback", // 위에서 설정한 Redirect URI
    },
    async (accessToken, refreshToken, profile, done) => {
      // console.log("profile: ", profile._json.kakao_account);
      var user = profile._json.kakao_account;

      done(null, user);
    }
  )
);

router.get("/kakao", passport.authenticate("kakao"));
router.get("/kakao/callback", passport.authenticate("kakao"), authSuccess2);

function authSuccess2(req, res) {
  console.log(req.user);
  const { profile, email } = req.user;
  console.log("social login test", profile.nickname, email);
  res.send({});
}

// 기헙 로그인
passport.use(
  new GithubStrategy(
    {
      clientID: "",
      clientSecret: "",
      callbackURL: "/auth/github/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      // console.log("profile: ", profile._json);
      var user = profile._json;

      done(null, user);
    }
  )
);

// const githubLogin = passport.authenticate("github");
router.get(
  "/github",
  passport.authenticate("github", {
    scope: [
      "repo:status",
      "read:repo_hook",
      "user:email&client_id=b2a3935e70cf762e6962",
    ],
  })
);

router.get("/github/callback", passport.authenticate("github"), authSuccess3);

function authSuccess3(req, res) {
  const { login, email } = req.user;
  console.log("social login test", login, email);
  res.send({});
}

module.exports = router;

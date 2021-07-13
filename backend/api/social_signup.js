import express from "express";
import passport from "passport";

// strategy import
import Google from "passport-google-oauth2";
import Kakao from "passport-kakao";
import Github from "passport-github";

const router = express.Router();
router.use(passport.initialize());

const GoogleStrategy = Google.Strategy;
const KakaoStrategy = Kakao.Strategy;
const GithubStrategy = Github.Strategy;

function authSuccess(req, res) {
  const { provider } = req.user;
  let mynickname = "";
  let myemail = "";
  try {
    if (provider === "github") {
      const { login, email } = req.user;
      mynickname = login;
      myemail = email;
    } else if (provider === "google") {
      const { displayName, email } = req.user;
      mynickname = displayName;
      myemail = email;
    } else if (provider === "kakao") {
      const { profile, email } = req.user;
      mynickname = profile.nickname;
      myemail = email;
    }

    if (mynickname === "") {
      throw new Error("invalidUser");
    } else if (!myemail) {
      res.send({ nickname: mynickname });
    } else {
      res.send({ nickname: mynickname, email: myemail });
    }
  } catch (err) {
    console.error(err);
    res.status(400).send(`${provider} 로그인에 실패했습니다`);
  }
}

// 구글 로그인
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "592072429727-d4j4hpsnufruqncsrojb75g4ur3u951h.apps.googleusercontent.com",
      clientSecret: "RXuqpCKNpXX85FCHGn7VUeAi",
      callbackURL: "/api/social/google/callback",
      passReqToCallback: true,
    },
    (request, accessToken, refreshToken, profile, done) => {
      const user = profile;
      user.provider = profile.provider;
      done(null, user);
    }
  )
);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email", "openid"] })
);

router.get("/google/callback", passport.authenticate("google"), authSuccess);

// 카카오로그인
passport.use(
  "kakao",
  new KakaoStrategy(
    {
      clientID: "88806fd7f63dd24d3065af028f601b16",
      callbackURL: "/api/social/kakao/callback", // 위에서 설정한 Redirect URI
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = profile._json.kakao_account;
      user.provider = profile.provider;
      done(null, user);
    }
  )
);

router.get("/kakao", passport.authenticate("kakao"));
router.get("/kakao/callback", passport.authenticate("kakao"), authSuccess);

// 기헙 로그인
passport.use(
  new GithubStrategy(
    {
      clientID: "b2a3935e70cf762e6962",
      clientSecret: "953ab00280597f0c254066c6ae1a541a02aaf44f",
      callbackURL: "/api/social/github/callback",
      passReqToCallback: true,
    },
    (request, accessToken, refreshToken, profile, done) => {
      const user = profile._json;
      user.provider = profile.provider;
      done(null, user);
    }
  )
);

// const githubLogin = passport.authenticate("github");
router.get("/github", passport.authenticate("github"));
router.get("/github/callback", passport.authenticate("github"), authSuccess);

export default router;

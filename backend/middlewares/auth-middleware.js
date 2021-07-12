import jwt from "jsonwebtoken";
import User from "../models/user";

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const [tokenType, tokenValue] = authorization.split(" ");

  if (tokenType !== "Bearer") {
    res.status(401).send({
      errorMessage: "token이 유효하지 않습니다.",
    });
    return;
  }
  try {
    const { userId } = jwt.verify(tokenValue, process.env.SECRET_KEY);
    const findUser = await User.findById(userId).exec();
    if (findUser === null) {
      throw new Error("invalidUser");
    } else {
      User.findById(userId).then((user) => {
        res.locals.userId = userId;
        next();
      });
    }
  } catch (err) {
    if (err.name == "TokenExpiredError") {
      return res.status(419).send({ message: "token 만료" });
    }
    return res.status(401).send({ message: "token이 유효하지 않습니다." });
  }
};

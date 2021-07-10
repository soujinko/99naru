import jwt from "jsonwebtoken";
import User from "../models/user";

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const [tokenType, tokenValue] = authorization.split(" ");

  if (tokenType !== "Bearer") {
    res.status(401).send({
      errorMessage: "로그인 후 사용하세요",
    });
    return;
  }
  try {
    const { userId } = jwt.verify(tokenValue, process.env.SECRET_KEY);
    User.findById(userId).then((user) => {
      res.locals.user_id = user_id;
      next();
    });
  } catch (error) {
    res.status(401).send({
      errorMessage: "로그인 후 사용하세요",
    });
    return;
  }
};

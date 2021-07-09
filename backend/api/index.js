import express from "express";
import multer from "multer";
import postsRouter from "./posts";
import commentsRouter from "./comments";
import signupRouter from "./signup";
import signinRouter from "./signin";
import duplicateRouter from "./duplicate";

import path from "path";

const router = express.Router();

router.use(multer().none());
router.use("/posts", postsRouter);
router.use("/comments", commentsRouter);
router.use("/signin", signinRouter);
router.use("/signup", signupRouter);
router.use("/duplicate", duplicateRouter);

router.get("/", (req, res, next) => {
  res.sendFile(path.join(path.resolve(), "/index.html"));
});

router.use("/api/posts", postsRouter);
router.use("/api/comments", commentsRouter);

export default router;

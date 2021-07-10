import express from "express";
import postsRouter from "./posts";
import commentsRouter from "./comments";
import signupRouter from "./signup";
import signinRouter from "./signin";
import duplicateRouter from "./duplicate";

const router = express.Router();

router.use("/posts", postsRouter);
router.use("/comments", commentsRouter);
router.use("/signin", signinRouter);
router.use("/signup", signupRouter);
router.use("/duplicate", duplicateRouter);

export default router;

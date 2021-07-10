<<<<<<< HEAD
import express from "express";
import postsRouter from "./posts";
import commentsRouter from "./comments";
import signupRouter from "./signup";
import signinRouter from "./signin";
import duplicateRouter from "./duplicate";
=======
import express from 'express'
import postsRouter from './posts.js'
import commentsRouter from './comments.js'
import signupRouter from './signup.js'
import signinRouter from './signin.js'
import duplicateRouter from './duplicate.js'
>>>>>>> f0e16e3fe3cbbc8350305496005a385dea8971d3

const router = express.Router();

router.use("/posts", postsRouter);
router.use("/comments", commentsRouter);
router.use("/signin", signinRouter);
router.use("/signup", signupRouter);
router.use("/duplicate", duplicateRouter);

export default router;

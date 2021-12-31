import express, { Router } from "express";
import { createPost, getAllPost, getPost, deletePost } from "../controller/post-controller.js";
import cors from "cors";
import bodyParse from "body-parser";

const router = express.Router();
router.post("/create", createPost);

router.get("/posts", getAllPost);
router.get("/post/:id", getPost);
router.delete("/delete/:id", deletePost);
//router.delete("/delete/:id", deletePost);


export default router;

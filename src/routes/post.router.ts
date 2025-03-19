// src/routes/post.router.ts
import { Router } from "express";
import { createPost, getPosts } from "../controllers/post.controller";

const router = Router();

router.get('/all', getPosts); 
router.post('/create',createPost)

export default router;
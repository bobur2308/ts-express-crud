// src/routes/post.router.ts
import { Router } from "express";
import { createPost, getPosts, updatePost } from "../controllers/post.controller";

const router = Router();

router.get('/all', getPosts); 
router.post('/create',createPost)
router.put('/edit/:id',updatePost)

export default router;
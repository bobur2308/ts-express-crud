// src/routes/post.router.ts
import { Router } from "express";
import { createPost, deletePost, getPostById, getPosts, updatePost } from "../controllers/post.controller";

const router = Router();

router.get('/all', getPosts); 
router.get('/:id',getPostById)
router.post('/create',createPost)
router.put('/edit/:id',updatePost)
router.delete('/delete/:id',deletePost)

export default router;
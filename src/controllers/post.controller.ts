
import { Request, Response } from "express";
import { handleError } from "../helpers/error.handler";
import postModel, {IPost} from "../models/post.model";

export async function getPosts(request: Request, response: Response): Promise<void> {
  try {
    const posts:IPost[] = await postModel.find();
    response.status(200).json({ success: true, data: posts }); 
  } catch (error:any) {
    handleError(response,500,error.message? error.message :"Server error")
  }
}

export async function getPostById(request:Request,response:Response):Promise<void>{
  try {
    const id = request.params.id;
    if(!id){
      handleError(response,404,'Id not found')
      return
    }
    const post: IPost | null = await postModel.findById(id)
    if(!post){
      handleError(response,404,'Post not found')
      return
    }

    response.status(200).json({success:true,data:post})
  } catch (error:any) {
    handleError(response,500,error.message? error.message :"Server error")
  }
}


export async function createPost(request:Request,response:Response):Promise<void>{
  try{
    const {
      title,
      content,
    } = request.body;

    const post:IPost = await postModel.create({title,content});
    response.status(201).json({success:true,data:post});
  }catch (error:any) {
    handleError(response,500,error.message? error.message :"Server error")
  }
}

export async function updatePost(request: Request, response: Response): Promise<void> {
  try {
    const { title, content } = request.body;
    const id = request.params.id;
    const post: IPost | null = await postModel.findById(id);

    if (!post) {
      handleError(response, 404, "Post not found"); 
      return;
    }
    
    if (title) post.title = title;     
    if (content) post.content = content; 
    await post.save();

    response.status(200).json({ success: true, data: post });
  } catch (error:any) {
    handleError(response,500,error.message? error.message :"Server error")
  }
}

export async function deletePost(request:Request,response:Response):Promise<void>{
  try {
    const id = request.params.id;
    if(!id){
      handleError(response,404,'Id not found')
      return
    }
    const post: IPost | null = await postModel.findById(id)
    if(!post){
      handleError(response,404,'Post not found')
      return
    }
    await post?.deleteOne()

    response.status(201).json({success:true,message:"Post deleted"})
  } catch (error:any) {
    handleError(response,500,error.message? error.message :"Server error")
  }
}

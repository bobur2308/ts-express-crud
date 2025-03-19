
import { Request, Response } from "express";
import { handleError } from "../helpers/error.handler";
import postModel, {IPost} from "../models/post.model";

export async function getPosts(request: Request, response: Response): Promise<void> {
  try {
    const posts:IPost[] = await postModel.find();
    response.status(200).json({ success: true, data: posts }); 
  } catch (error: any) {
    handleError(response, 500, error.message); 
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
  }catch(error:any){
    handleError(response,500,error.message);
  }
}


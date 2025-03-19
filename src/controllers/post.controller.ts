import { Request, Response } from "express";
import { handleError } from "../helpers/error.handler";


export default async function getPosts(request:Request,response:Response){
  try {
    
  } catch (error:any) {
    return handleError(response, 500, error.message);
  }
}
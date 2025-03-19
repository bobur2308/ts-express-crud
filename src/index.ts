import express, { Request, Response } from 'express'
import postRouter from './routes/post.router'
import dotenv from 'dotenv'
import connectDB from './config/db'

dotenv.config()
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
connectDB()

//routes
app.use('/api/posts',postRouter)

const port = process.env.port || 5000
app.listen(port,()=>{
  console.log(`Server is running on port ${port}`)
})
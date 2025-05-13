import express, { Request, Response } from 'express'
import mainRouter from './routes/index.js'
import cors from 'cors'
import signUpRouter from './routes/signUpRoutes.js';
import { createUser } from './services/signUpService.js';
// import { sign, verify } from 'jsonwebtoken';
import dotenv from 'dotenv'
import pkg from 'jsonwebtoken'

const app = express();
dotenv.config();

const { sign } = pkg
// const corsOptions = {
//     origin: 'http://localhost:3000/signup',
//     credentials: false,
//     optionSuccessStatus: 200
// // }
// app.post('/api/signup', (_req: Request, _res: Response) => {
//   console.log("backend is listening")
// })
app.use(cors());
app.use(express.json())
// app.use('/api/signup', signUpRouter);
app.post('/api/signup', (req: Request, res: Response): any => {
  const { username, password } = req.body
  console.log('the value of req received from the frontend is', req.body)

  const token = sign({ username, role: 'user' }, 'kaboom', { expiresIn: '1hr' })

  createUser(req.body.username, req.body.password)
  res.status(200).json({ message: 'backend received successfully', token })
})
// app.post("/api/signup",(req,res) =>{
//     console.log("received  request");
//     res.status(200).json({message:'user created'});
// })
app.listen(3002, () => {
  console.log("shopJacket backend online..");
});

import express, { Request, Response } from 'express'
import mainRouter from './routes/index.js'
import cors from 'cors'
import signUpRouter from './routes/signUpRoutes.js';
import { createUser } from './services/signUpService.js';
const app = express();

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
  console.log('the value of req received from the frontend is', req.body)
  createUser(req.body.username, req.body.password)
  res.status(200).json({ message: 'backend received successfully' })
})
// app.post("/api/signup",(req,res) =>{
//     console.log("received  request");
//     res.status(200).json({message:'user created'});
// })
app.listen(3002, () => {
  console.log("shopJacket backend online..");
});

import { Request, Response } from 'express'
import { createUser } from '../services/signUpService.js'


const signUp = (req: Request, res: Response): void => {
  // console.log('inside the signup controller')
  // createUser();
  res.status(200).json({ message: 'user created' })
};

export default signUp;

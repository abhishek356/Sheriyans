import express from 'express';
import signUp from '../controllers/signUpController.js';

const signUpRouter = express.Router();

signUpRouter.post('/api/signup', signUp);

export default signUpRouter;

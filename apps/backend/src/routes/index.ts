import express from 'express';
import signUpRoutes from '../routes/signUpRoutes.js'
// import * as signUpController from '../controllers/signUpController'
import { Response, Request } from 'express';
const signUpRouter = express.Router();

signUpRouter.post('/api/signup', function (req: Request, res: Response) {

  console.log('this is the main router')
  res.end()
})

// router.use('/api/signup', signUpRoutes);
//
export default signUpRouter;

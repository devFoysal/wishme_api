import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';
const router = express.Router();

router.post(
  '/create-user',
  validateRequest(UserValidation.createUser),
  UserController.createUser
);
router.post(
  '/login-user',
  validateRequest(UserValidation.loginUser),
  UserController.loginUser
);

export const UserRoutes = router;

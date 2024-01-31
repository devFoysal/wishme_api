import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthController } from './auth.controller';
import { AuthValidation } from './auth.validation';
const router = express.Router();

router.post(
  '/create-user',
  validateRequest(AuthValidation.createUser),
  AuthController.createUser
);
router.post(
  '/create-admin',
  validateRequest(AuthValidation.createUser),
  AuthController.createUser
);
router.post(
  '/login',
  validateRequest(AuthValidation.loginUser),
  AuthController.loginUser
);
router.post(
  '/send-otp',
  validateRequest(AuthValidation.sendOtp),
  AuthController.sendOtp
);
router.post(
  '/verify-otp',
  validateRequest(AuthValidation.verifyOtp),
  AuthController.verifyOtp
);

export const AuthRoutes = router;

import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { VerifyOtpController } from './verifyOtp.controller';
import { VerifyOtpValidation } from './verifyOtp.validation';
const router = express.Router();

router.post(
  '/',
  validateRequest(VerifyOtpValidation.create),
  VerifyOtpController.insertIntoDb
);

export const VerifyOtpRoutes = router;

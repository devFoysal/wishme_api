import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { VerifyOtpController } from './verifyOtp.controller';
import { VerifyOtpValidation } from './verifyOtp.validation';
const router = express.Router();

router.post(
  '/send',
  validateRequest(VerifyOtpValidation.sendOtp),
  VerifyOtpController.sendNumberOtp
);
router.post(
  '/verify',
  validateRequest(VerifyOtpValidation.verifyOtp),
  VerifyOtpController.verificationOtp
);

export const VerifyOtpRoutes = router;

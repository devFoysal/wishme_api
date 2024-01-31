import { SendNumberOtp } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';
import { VerifyOtpService } from './verifyOtp.service';

const sendNumberOtp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await VerifyOtpService.sendNumberOtp(req?.body);
    sendResponse<SendNumberOtp>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Check  your sms for the OTP',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const verificationOtp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await VerifyOtpService.verificationOtp(req?.body);
    sendResponse<SendNumberOtp>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: result?.message,
      data: result?.data,
    });
  } catch (error) {
    next(error);
  }
};

export const VerifyOtpController = {
  sendNumberOtp,
  verificationOtp,
};

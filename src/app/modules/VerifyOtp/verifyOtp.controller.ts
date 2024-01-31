import { VerifyOtp } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';
import { VerifyOtpService } from "./verifyOtp.service";

const insertIntoDb = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await VerifyOtpService.insertIntoDb(req?.body);
    sendResponse<VerifyOtp>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Otp send successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};


export const VerifyOtpController = {
  insertIntoDb,

};

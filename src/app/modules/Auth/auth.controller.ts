import { SendNumberOtp, User } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import sendResponse, { IApiResponse } from '../../../shared/sendResponse';
import { IVerifyOtpProps } from './auth.interface';
import { AuthService } from './auth.service';

//  Create user
const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = (await AuthService.createUser(
      req?.body
    )) as unknown as IApiResponse<Partial<User>>;
    sendResponse<Partial<User>>(res, {
      statusCode: result?.statusCode,
      success: result?.success,
      message: result?.message,
      data: result?.data,
    });
  } catch (error) {
    next(error);
  }
};

// Create Admin
const createAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = (await AuthService.createUser(
      req?.body
    )) as unknown as IApiResponse<Partial<User>>;
    sendResponse<Partial<User>>(res, {
      statusCode: result?.statusCode,
      success: result?.success,
      message: result?.message,
      data: result?.data,
    });
  } catch (error) {
    next(error);
  }
};
// LoginAuth
const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = (await AuthService.loginUser(
      req?.body
    )) as unknown as IApiResponse<Partial<User>>;
    sendResponse<Partial<User>>(res, {
      statusCode: result?.statusCode,
      success: result?.success,
      message: result?.message,
      data: result?.data,
    });
  } catch (error) {
    next(error);
  }
};
// send Otp number
const sendOtp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = (await AuthService.sendOtp(
      req?.body
    )) as unknown as IApiResponse<Partial<SendNumberOtp>>;
    sendResponse<Partial<SendNumberOtp>>(res, {
      statusCode: result?.statusCode,
      success: result?.success,
      message: result?.message,
      data: result?.data,
    });
  } catch (error) {
    next(error);
  }
};

//  otp verification
const verifyOtp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = (await AuthService.verifyOtp(
      req?.body
    )) as unknown as IApiResponse<Partial<IVerifyOtpProps>>;
    sendResponse(res, {
      statusCode: result?.statusCode,
      success: result?.success,
      message: result?.message,
      data: result?.data,
    });
  } catch (error) {
    next(error);
  }
};
//
const forgetPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = (await AuthService.forgetPassword(
      req?.body
    )) as unknown as IApiResponse<Partial<SendNumberOtp>>;
    sendResponse<Partial<SendNumberOtp>>(res, {
      statusCode: result?.statusCode,
      success: result?.success,
      message: result?.message,
      data: result?.data,
    });
  } catch (error) {
    next(error);
  }
};
const resetPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = (await AuthService.resetPassword(
      req?.body
    )) as unknown as IApiResponse<Partial<User>>;
    sendResponse<Partial<User>>(res, {
      statusCode: result?.statusCode,
      success: result?.success,
      message: result?.message,
      data: result?.data,
    });
  } catch (error) {
    next(error);
  }
};

// update user
const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  const props = {
    token: req.headers['token'],
    body: req?.body,
  };
  try {
    const result = await AuthService.updateUser(props);
    sendResponse<Partial<User>>(res, {
      statusCode: result?.statusCode,
      success: result?.success,
      message: result?.message,
      data: result?.data,
    });
  } catch (error) {
    next(error);
  }
};

//  auth
export const AuthController = {
  createUser,
  loginUser,
  createAdmin,
  sendOtp,
  verifyOtp,
  forgetPassword,
  resetPassword,
  updateUser,
};

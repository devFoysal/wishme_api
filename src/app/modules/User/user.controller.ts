import { User } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './user.service';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.createUser(req?.body);
    sendResponse<User>(res, {
      statusCode: result.status,
      success: result?.success,
      message: result?.message,
      data: result?.data,
    });
  } catch (error) {
    next(error);
  }
};
const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.loginUser(req?.body);
    sendResponse<User>(res, {
      statusCode: result?.status,
      success: result?.success,
      message: result?.message,
      data: result?.data,
    });
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  createUser,
  loginUser,
};

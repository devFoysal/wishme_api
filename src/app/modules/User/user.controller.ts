import { User } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './user.service';

const insertIntoDb = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await UserService.insertIntoDb(req?.body);
    sendResponse<User>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Create user successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};


export const UserController = {
  insertIntoDb,

};

import { Wish } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';
import { WishesService } from './wishes.service';

const wishCreate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await WishesService.wishCreate(req?.body);
    sendResponse<Wish>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Wish create successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getAllWishes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await WishesService.wishCreate(req?.body);
    sendResponse<Wish>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Wish create successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const WishesController = {
  wishCreate,
  getAllWishes,
};

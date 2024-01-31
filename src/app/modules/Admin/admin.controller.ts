// import { User } from '@prisma/client';
// import { NextFunction, Request, Response } from 'express';
// import sendResponse, { IApiResponse } from '../../../shared/sendResponse';

// const createAdmin = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const result = await AuthService.createUser(req?.body) as unknown  as IApiResponse<Partial<User>>
//     sendResponse<Partial<User>>(res, {
//       statusCode: result?.statusCode,
//       success: result?.success,
//       message: result?.message,
//       data: result?.data 
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// export const AuthController = {
//   createAdmin
// };

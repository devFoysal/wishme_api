import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthController } from './auth.controller';
import { AuthValidation } from './auth.validation';
const router = express.Router();

/**
 * @swagger
 * {
 *   "tags": {
 *     "Authorization": {
 *       "name": "Authorization",
 *       "description": "Operations related to user authorization"
 *     }
 *   },
 *   "/auth/create-user": {
 *     "post": {
 *       "summary": "Create a new user",
 *       "tags": ["Authorization"],
 *       "requestBody": {
 *         "content": {
 *           "application/json": {
 *             "schema": {
 *               "type": "object",
 *              "properties": {
 *                 "mobile": {
 *                   "type": "string",
 *                   "description": "User's mobile number",
 *                   "example": "1234567890"
 *                 },
 *                 "password": {
 *                   "type": "string",
 *                   "description": "User's password",
 *                   "example": "securepassword"
 *                 }
 *               },
 *               "required": ["mobile", "password"]
 *             }
 *           }
 *         }
 *       },
 *       "responses": {
 *         "201": {
 *           "description": "Successfully created a new user"
 *         },
 *         "400": {
 *           "description": "Bad request"
 *         }
 *       }
 *     }
 *   }
 * }
 */

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
  '/profile-update',
  validateRequest(AuthValidation.updateUser),
  AuthController.updateUser
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
router.post(
  '/forget-password',
  validateRequest(AuthValidation.forgetPassword),
  AuthController.forgetPassword
);
router.post(
  '/reset-password',
  validateRequest(AuthValidation.resetPassword),
  AuthController.resetPassword
);

router.post(
  '/reset-password',
  validateRequest(AuthValidation.resetPassword),
  AuthController.resetPassword
);

export const AuthRoutes = router;

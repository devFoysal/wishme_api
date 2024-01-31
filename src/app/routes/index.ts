import express from 'express';
import { UserRoutes } from '../modules/User/user.routes';
import { VerifyOtpRoutes } from '../modules/VerifyOtp/verifyOtp.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/otp',
    route: VerifyOtpRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;

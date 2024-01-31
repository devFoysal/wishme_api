import express from 'express';
import { UserRoutes } from '../modules/User/user.routes';
import { VerifyOtpRoutes } from '../modules/VerifyOtp/verifyOtp.routes';
import { WishesRoutes } from '../modules/Wishes/wishes.routes';

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
  {
    path: '/wishes',
    route: WishesRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;

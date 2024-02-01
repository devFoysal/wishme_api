import express from 'express';
import { AuthRoutes } from '../modules/Auth/auth.routes';
import { WishesRoutes } from '../modules/Wishes/wishes.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/wishes',
    route: WishesRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;

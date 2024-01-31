import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { WishesController } from './wishes.controller';
import { WishesValidation } from './wishes.validation';

const router = express.Router();

router.post(
  '/create-wish',
  validateRequest(WishesValidation.createWishes),
  WishesController.wishCreate
);

export const WishesRoutes = router;

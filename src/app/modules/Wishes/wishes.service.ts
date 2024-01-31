import { Wish } from '@prisma/client';
import prisma from '../../../shared/prisma';

const wishCreate = async (props: Wish) => {
  // database
  const res = await prisma.wish.create({
    data: props,
  });
  return res;
};

const getAllWishes = async () => {
  // database
  const res = await prisma.wish.findMany({});
  return res;
};

export const WishesService = {
  wishCreate,
  getAllWishes,
};

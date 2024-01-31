import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDb = async (
  userData: User
): Promise<User> => {
  const res = await prisma.user.create({
    data: userData
  })
  
  return res;
};

export const UserService = {
  insertIntoDb,
};

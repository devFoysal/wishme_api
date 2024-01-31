import { VerifyOtp } from '@prisma/client';
import { ExpireTime, RandomNumber } from '../../../helpers';
import prisma from '../../../shared/prisma';

const insertIntoDb = async (props: VerifyOtp) => {
  const otp = RandomNumber(4);
  const expireTime = ExpireTime()

  const data = {
    mobile: props?.mobile,
    otp: otp,
    expire_time: `${expireTime}`,
  };
  // database
  const res = await prisma.verifyOtp.create({
    data: data,
  });

  return res;
};
export const VerifyOtpService = {
  insertIntoDb,
};

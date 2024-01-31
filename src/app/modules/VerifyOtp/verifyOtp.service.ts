import { SendNumberOtp } from '@prisma/client';
import { ExpireTime, RandomNumber } from '../../../helpers';
import { SEND_SMS } from '../../../helpers/smsSender';
import prisma from '../../../shared/prisma';

const sendNumberOtp = async (props: SendNumberOtp) => {
  const otp = RandomNumber(4);
  const expireTime = ExpireTime();

  const data = {
    mobile: props?.mobile,
    otp: otp,
    expire_time: `${expireTime}`,
  };
  // database
  const res = await prisma.sendNumberOtp.create({
    data: data,
  });

  // Send SMS
  const smsMessage = `Wish Me: Your OTP is ${data.otp}. Use it to verify you phone  number. Expire in 2 minutes.`;
  await SEND_SMS(data.mobile, smsMessage);

  return res;
};

// git config --global user.name "Md-Yousuf-Sheikh"
//     git config --global user.email sheikhyousuf702@gmail.com

const verificationOtp = async (props: {
  otp: string | number;
  mobile: string;
}) => {
  // database
  const res = await prisma.sendNumberOtp.findFirst({
    where: {
      mobile: props?.mobile,
    },
    orderBy: {
      updated_at: 'desc',
    },
  });

  if (res) {
    if (res?.mobile === props?.mobile && res?.otp === props?.otp) {
      return {
        data: {
          module: res?.mobile,
        },
        message: 'Number Verification Successfully',
      };
    } else {
      return {
        data: null,
        message: "Otp doesn't match",
      };
    }
  } else {
    return {
      data: null,
      message: 'Mobile number not match',
    };
  }
};

export const VerifyOtpService = {
  sendNumberOtp,
  verificationOtp,
};

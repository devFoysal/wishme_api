import { z } from 'zod';

const sendOtp = z.object({
  body: z.object({
    mobile: z.string({
      required_error: 'Mobile number is required',
    }),
  }),
});
const verifyOtp = z.object({
  body: z.object({
    mobile: z.string({
      required_error: 'Mobile number is required',
    }),
    otp: z.string({
      required_error: 'Otp is required',
    }),
  }),
});

export const VerifyOtpValidation = {
  sendOtp,
  verifyOtp,
};

import { z } from 'zod';

const createUser = z.object({
  body: z.object({
    mobile: z.string({
      required_error: 'Mobile number is required',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
  }),
});

const createAdmin = z.object({
  body: z.object({
    mobile: z.string({
      required_error: 'Mobile number is required',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
  }),
});

const loginUser = z.object({
  body: z.object({
    mobile: z.string({
      required_error: 'Mobile number is required',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
  }),
});

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

export const AuthValidation = {
  createUser,
  loginUser,
  createAdmin,
  sendOtp,
  verifyOtp
};

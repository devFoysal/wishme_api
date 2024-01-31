import { z } from 'zod';

const create = z.object({
  body: z.object({
    mobile: z.string({
      required_error: 'Mobile number is required',
    }),
  }),
});

export const VerifyOtpValidation = {
  create,
};

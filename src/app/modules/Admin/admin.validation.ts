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

export const AdminValidation = {
  createUser,
};

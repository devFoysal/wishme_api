import { z } from 'zod';


const createWishes = z.object({
  body: z.object({
    receiver_name: z.string({
      required_error: 'Receiver name is required',
    }),
    mobile: z.string({
      required_error: 'Mobile number is required',
    }),
    message: z.string({
      required_error: 'Message is required',
    }),
    wish_type: z.string({
      required_error: 'Wish type is required',
    }),
    schedule_date: z.string({
      required_error: 'Schedule date is required',
    }),
  }),
});

export const WishesValidation = {
  createWishes,
};

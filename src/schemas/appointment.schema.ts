import {z} from 'zod';

export const availableQuerySchema = z.object({
  date: z.iso.date(),
});

export const createAppointmentSchema = z.object({
  date: z.iso.date(),
  startTime: z.iso.time({
    precision: -1,
  }),
});

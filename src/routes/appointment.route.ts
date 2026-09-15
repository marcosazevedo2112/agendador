import Router from 'express';

import appointmentController from '../controllers/appointment.controller';
import {validateQuery, validateBody} from '../middlewares/validate';
import {
  createAppointmentSchema,
  availableQuerySchema,
} from '../schemas/appointment.schema';

const appointmentRouter = Router();

appointmentRouter.get('/', appointmentController.getAllAppointments);
appointmentRouter.post(
  '/',
  validateBody(createAppointmentSchema),
  appointmentController.createAppointment,
);
appointmentRouter.get(
  '/availability',
  validateQuery(availableQuerySchema),
  appointmentController.checkAvailability,
);

export default appointmentRouter;

import {Request, Response} from 'express';

import appointmentService from '../services/appointment.service';

const appointmentController = {
  getAllAppointments: async (req: Request, res: Response) => {},
  createAppointment: async (req: Request, res: Response) => {},
  checkAvailability: async (req: Request, res: Response) => {
    const requestDate = res.locals.validatedQuery.date;
    const isAvailable = await appointmentService.checkAvailability(requestDate);
    return res.status(200).json({available: isAvailable});
  },
};

export default appointmentController;

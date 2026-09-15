import {Router} from 'express';

import appointmentRouter from './appointment.route';

const appRouter = Router();

appRouter.use('/appointments', appointmentRouter);

export default appRouter;

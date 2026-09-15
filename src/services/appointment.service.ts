import callendarRepository from '../repositories/callendar.repository';

const appointmentService = {
  checkAvailability: (date: string) => {
    return callendarRepository.checkWorkDay(date);
    //TODO: Implement the logic to check if a day is fully booked based on the appointments in the database.
  },
};

export default appointmentService;

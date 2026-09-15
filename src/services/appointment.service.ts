import workDaysRepository from '../repositories/workDays.repository';

const appointmentService = {
  checkAvailability: (date: string) => {
    return workDaysRepository.checkWorkDay(date);
    //TODO: Implement the logic to check if a day is fully booked based on the appointments in the database.
  },
};

export default appointmentService;

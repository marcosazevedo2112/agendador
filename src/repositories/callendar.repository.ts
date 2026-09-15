const callendarRepository = {
  checkWorkDay: async (date: string): Promise<boolean> => {
    const day = new Date(date);

    const dayOfWeek = day.getDay();

    if (dayOfWeek === 0 || dayOfWeek === 6) {
      return false;
    }

    return checkHolidays(date);
  },
};

async function checkHolidays(date: string): Promise<boolean> {
  const year = date.split('-')[0];

  const url = `${process.env.HOLIDAYS_API_URL}/${year}/BR`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch holidays: ${response.status} ${response.statusText}`,
    );
  }

  const holidays = (await response.json()) as Holiday[];

  const isHoliday = holidays.some(
    (holiday: {date: string}) => holiday.date === date,
  );

  return !isHoliday;
}

interface Holiday {
  date: string;
}

export default callendarRepository;

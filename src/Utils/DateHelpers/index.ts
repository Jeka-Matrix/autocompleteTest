import { format, isValid, addDays } from 'date-fns';

//TODO check if we need it here date-fns-tz utcToZonedTime(win.EndDate, "Asia/Jerusalem") to force time zones to work with israel time zone
type IDate = string | Date;
/**
 * @param date string | Date
 */
export const setDate = (date: IDate) => {
  if (typeof date === 'string') {
    if (isValid(new Date(date))) return new Date(date);
    return null;
  }
  return date;
};

/**
 *
 * @param date string | Date
 * @returns 'dd/MM/yyyy'
 */
export const getDateString = (date: IDate) => {
  const Date = setDate(date);
  if (Date) return format(Date, 'dd/MM/yyyy');
  return '';
};
/**
 *
 * @param date string | Date
 * @returns 'HH:mm'
 */
export const getTimeString = (date: IDate) => {
  const Date = setDate(date);
  if (Date) return format(Date, 'HH:mm');
  return '';
};
/**
 *
 * @param date string | Date
 * @returns 'dd/MM/yyyy HH:mm'
 */
export const getFullDateString = (date: IDate) => {
  const Date = setDate(date);
  if (Date) {
    return `${format(Date, 'dd/MM/yyyy HH:mm')}`;
  }
  return '';
};
/**
 * @param date string | Date
 */
export const getFullDateObject = (date: IDate) => {
  const Date = setDate(date);
  if (Date) {
    const [day, month, year, hour, minute] = format(
      Date,
      'dd^MM^yyyy^HH^mm'
    ).split('^');
    return {
      date: `${day}/${month}/${year}`,
      time: `${hour}:${minute}`,
      day: parseInt(day),
      month: parseInt(month),
      year: parseInt(year),
      hour: parseInt(hour),
      minute: parseInt(minute),
    };
  }
  return null;
};
/**
 * @param date string | Date
 * @returns ISOString
 *
 * example: 2022-07-28T12:07:00Z
 */
export const getISOString = (date: IDate) => {
  const Date = setDate(date);
  if (Date) return Date.toISOString();
  return '';
};

/**
 *
 * @param date string | Date
 * @param amount number
 * @returns 'dd/MM/yyyy'
 */
export const addDaysToISoSstring = (date: string, amount: number) => {
  const Date = setDate(date);
  if (Date) return getISOString(addDays(Date, amount))
  return '';
};


/**
 *
 * return current date with time of the day set to 0 0 0 0
 * @returns '2023-01-29T0:0:0.0Z'
 */
export const getTodayDate = () => {
  const date = new Date();
  date.setUTCHours(0, 0, 0, 0);
  return date;
};

interface IDistanceFromNow {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  distance: number;
  isPastTime: boolean;
}
export const getDistanceFromNow: (endDate: IDate) => IDistanceFromNow = (endDate) => {
  const to = setDate(endDate);
  if (!to) throw new Error("Invalid end date");
  const distance = to.getTime() - new Date().getTime();
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return {
    days, hours, minutes, seconds, distance, isPastTime: distance <= 0
  }
}
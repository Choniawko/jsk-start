import { calendar } from "./common/calendar"

export const getCurrMonthArr = (year, month) => {
  return calendar.monthDays(year, month)
}

export const getLastDay = (year, month) =>
  calendar
    .monthDays(year, month)
    .reduce((acc, curr) => acc.concat(curr), [])
    .filter(day => day > 0)
    .reverse()[0]

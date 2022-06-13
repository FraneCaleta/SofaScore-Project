export const getDateToday = new Date().toISOString().slice(0, 10);
export const getDateTodayNormal = new Date();

export function getDateToISO(date) {
  return date.toISOString().slice(0, 10);
}

export function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function getTimestampToTime(timestamp) {
  const milliseconds = timestamp * 1000;
  const dateObject = new Date(milliseconds);
  const humanDateFormat = dateObject.toLocaleString().slice(12, 17);
  return humanDateFormat;
}

export function getTimestampToDateTime(timestamp) {
  const milliseconds = timestamp * 1000;
  const dateObject = new Date(milliseconds);
  const humanDateFormat = dateObject.toLocaleString();
  return humanDateFormat;
}

export function addOffsetToDate(offset) {
  const now = new Date();
  const date = new Date(now.getTime() + offset);
  return date;
}

export function filterTimestamps(timestamp) {
  const dateTodayISO = new Date().toISOString().slice(0, 10);
  const milliseconds = timestamp * 1000;
  const dateObject = new Date(milliseconds);
  const dateFromTimestamp = dateObject.toISOString().slice(0, 10);

  return dateTodayISO === dateFromTimestamp ? true : false;
}

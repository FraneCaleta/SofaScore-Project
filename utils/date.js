export const todayDate = new Date().toISOString().slice(0, 10);
export const todayDateNormal = new Date();

export function dateToISO(date) {
  return date.toISOString().slice(0, 10);
}

export function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function timestampToTime(timestamp) {
  const milliseconds = timestamp * 1000;
  const dateObject = new Date(milliseconds);
  const humanDateFormat = dateObject.toLocaleString().slice(12, 17);
  return humanDateFormat;
}

export function timestampToDateTime(timestamp) {
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
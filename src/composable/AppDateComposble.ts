import moment from "moment";

export function useDate(date: number) {
  return { getHumanDate };
}

function getHumanDate(date: number) {
  const format = 'LL';

  return moment(date).local(true).format(format);
}

import moment from "jalali-moment";

const convertISOToDateString = (dateStr?: string | null) => {
  if (dateStr) {
    const d = new Date(dateStr);
    const year = d.getFullYear();
    let month: any = d.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    let date: any = d.getDate();
    date = date < 10 ? `0${date}` : date;

    return `${year}-${month}-${date} ${getFormatTime(d)}`;
  }
  return dateStr;
};

export const getFormatDateTime = (dateStr?: string | null) => {
  if (dateStr) {
    return moment
      .from(convertISOToDateString(dateStr)!, "en", "YYYY-MM-DD HH:mm")
      .format("jYYYY/jMM/jDD HH:mm");
  }
  return "-";
};

export const getFormatDate = (dateStr?: string | null) => {
  if (dateStr) {
    // 2024-11-24T16:01:22.342Z
    return moment
      .from(convertISOToDateString(dateStr)!, "en", "YYYY-MM-DD HH:mm")
      .format("jYYYY/jMM/jDD");
  }
  return "-";
};

export const getTimeFromNow = (dateStr?: string | null) => {
  if (dateStr) {
    return moment(new Date(dateStr).getTime()).locale("fa").fromNow();
  }
  return "-";
};

export const getFormatTime = (date?: Date) => {
  if (date) {
    let hr: number | string = date.getHours();
    hr = hr < 10 ? `0${hr}` : hr;
    let min: number | string = date.getMinutes();
    min = min < 10 ? `0${min}` : min;
    let sec: number | string = date.getSeconds();
    sec = sec < 10 ? `0${sec}` : sec;
    return `${hr}:${min}:${sec}`;
  }
  return "-";
};

import { isToday, isYesterday, format } from "date-fns";

const formatTime = (date) => format(date, "h:m a");

const formatTimestamp = (date) => {
  if (isToday(date)) {
    return formatTime(date);
  } else if (isYesterday(date)) {
    return `Yesterday at ${formatTime(date)}`;
  } else {
    return `${format(date, "d/M/y")} ${formatTime(date)}`;
  }
};

export default formatTimestamp;

export const formatTime = (time: string | Date, includeSecs: boolean) => {
  const dateTime = new Date(time);

  const hours = dateTime.getHours();
  const formattedHours = hours % 12 || 12;
  //if the hour starts with 0, remove it
  const deZeroedHours = formattedHours.toString().replace(/^0/, "");

  const minutes = dateTime.getMinutes();
  const formattedMinutes = minutes.toString().padStart(2, "0"); //may not be a number

  const seconds = dateTime.getSeconds();
  const formattedSeconds = seconds.toString().padStart(2, "0");

  if (
    Number.isNaN(formattedHours) ||
    Number.isNaN(minutes) ||
    Number.isNaN(seconds)
  ) {
    return String(time);
  }
  return includeSecs
    ? `${deZeroedHours}:${formattedMinutes}:${formattedSeconds}`
    : `${deZeroedHours}:${formattedMinutes}`;
};

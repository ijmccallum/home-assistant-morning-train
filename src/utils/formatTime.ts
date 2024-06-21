export const formatTime = (time: string | Date, includeSecs: boolean) => {
  const dateTime = new Date(time);

  const hours = dateTime.getHours();
  const formattedHours = hours % 12 || 12;

  const minutes = dateTime.getMinutes();
  const formattedMinutes = minutes.toString().padStart(2, "0");

  const seconds = dateTime.getSeconds();
  const formattedSeconds = seconds.toString().padStart(2, "0");

  const ampm = hours >= 12 ? "pm" : "am";
  return includeSecs
    ? `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`
    : `${formattedHours}:${formattedMinutes} ${ampm}`;
};

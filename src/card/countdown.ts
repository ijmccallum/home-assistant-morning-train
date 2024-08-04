import { html } from "lit";

export const formatCountdown = (seconds: number) => {
  if (Number.isNaN(seconds)) {
    return "__:__:__";
  }
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = formatDigits(seconds % 60);

  if (hours === -1) {
    return "Gone";
  }

  if (hours === 0 && minutes === 0) {
    return html`__:__:${remainingSeconds}`;
  }

  if (hours === 0) {
    return html`__:${minutes}:${remainingSeconds}`;
  }

  return html`${hours}:${formatDigits(minutes)}:${remainingSeconds}`;
};

const formatDigits = (num: number) => {
  return num.toString().padStart(2, "0");
};

export const countdown = (expected: string) => {
  const seconds = Math.floor(
    (new Date(expected).getTime() - new Date().getTime()) / 1000,
  );

  return html`
    <div class="">
      ${formatCountdown(seconds)}
    </div>
  `;
};

import { html } from "lit";

const formatCountdown = (seconds: number) => {
  const hours = formatDigits(Math.floor(seconds / 3600));
  const minutes = formatDigits(Math.floor((seconds % 3600) / 60));
  const remainingSeconds = formatDigits(seconds % 60);

  if (hours === "-1") {
    return "Gone";
  }

  if (hours === "00" && minutes === "00") {
    return html`${remainingSeconds}`;
  }

  if (hours === "00") {
    return html`${minutes}:${remainingSeconds}`;
  }

  return html`${hours}:${minutes}:${remainingSeconds}`;
};

const formatDigits = (num: number) => {
  return num.toString().padStart(2, "0");
};

export const countdown = (expected: string) => {
  const seconds = Math.floor(
    (new Date(expected).getTime() - new Date().getTime()) / 1000,
  );

  return html`
    <div>
      Countdown<br />
      <span class="text-2xl font-black">
      ${formatCountdown(seconds)}
      </span>
    </div>
    <div class="font-black">
      Chill
    </div>
  `;
};

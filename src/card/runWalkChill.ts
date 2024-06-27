import { html } from "lit-html";
import { formatCountdown } from "./countdown";

export const runWalkChill = ({
  expected,
  time_to_station_normal_mins,
  time_to_station_rush_mins,
  ideal_mins_waiting_at_station,
}: {
  expected: string;
  time_to_station_normal_mins: string;
  time_to_station_rush_mins: string;
  ideal_mins_waiting_at_station: string;
}) => {
  const seconds = Math.floor(
    (new Date(expected).getTime() - new Date().getTime()) / 1000,
  );
  const waitingSeconds =
    Number.parseInt(ideal_mins_waiting_at_station) * 60 || 300;
  const normalSeconds = Number.parseInt(time_to_station_normal_mins) * 60;
  const rushSeconds = Number.parseInt(time_to_station_rush_mins) * 60;

  const timeToLeave = seconds - (waitingSeconds + normalSeconds);
  const timeToRun = seconds - rushSeconds;

  let state = html`Leave in ${formatCountdown(timeToLeave)}`;

  // if number of seconds from now to expected time is less than the normal time to station then we're in a rush
  if (seconds < waitingSeconds + normalSeconds) {
    state = html`Get running in ${formatCountdown(timeToRun)}`;
  }
  // if number of seconds from now to expected time is less than the rush time to station then we've missed it
  if (seconds < rushSeconds) {
    state = html`missed`;
  }

  return html`
    <div class="pl-6 text-2xl font-black text-right">
      ${state}
    </div>
  `;
};

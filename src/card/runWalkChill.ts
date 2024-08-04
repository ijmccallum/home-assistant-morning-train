import { html } from "lit-html";
import { formatCountdown } from "./countdown";

export const runWalkChill = ({
  expected,
  time_to_station_normal_mins,
  time_to_station_rush_mins,
  ideal_mins_waiting_at_station,
  longest_mins_waiting_at_station,
}: {
  expected: string;
  time_to_station_normal_mins: string;
  time_to_station_rush_mins: string;
  ideal_mins_waiting_at_station: string;
  longest_mins_waiting_at_station: string;
}) => {
  const secondsTillTrain = Math.floor(
    (new Date(expected).getTime() - new Date().getTime()) / 1000,
  );
  const longestWaitingSeconds =
    Number.parseInt(longest_mins_waiting_at_station) * 60 || 600;
  const idealWaitingSeconds =
    Number.parseInt(ideal_mins_waiting_at_station) * 60 || 300;
  const walkSeconds = Number.parseInt(time_to_station_normal_mins) * 60;
  const rushSeconds = Number.parseInt(time_to_station_rush_mins) * 60;

  //<div>${formatCountdown(timeToLeave)}</div>
  let state = html`<div>Chill</div>`;

  if (secondsTillTrain <= longestWaitingSeconds + walkSeconds) {
    state = html`<div>Walk</div>`;
  }

  // if number of seconds from now to expected time is less than the normal time to station then we're in a rush
  if (secondsTillTrain <= idealWaitingSeconds + walkSeconds) {
    state = html`<div>Power Walk</div>`;
  }

  if (secondsTillTrain < walkSeconds && secondsTillTrain >= rushSeconds) {
    state = html`<div>RUN</div>`;
  }
  // if number of seconds from now to expected time is less than the rush time to station then we've missed it
  if (secondsTillTrain < rushSeconds) {
    state = html`missed`;
  }

  return html`
    <div class="">
      ${state}
    </div>
  `;
};

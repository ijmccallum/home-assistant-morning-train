import { html } from "lit-html";

export const runWalkChill = ({
  expected,
  time_to_station_normal_mins,
  time_to_station_rush_mins,
}: {
  expected: string;
  time_to_station_normal_mins: string;
  time_to_station_rush_mins: string;
}) => {
  const seconds = Math.floor(
    (new Date(expected).getTime() - new Date().getTime()) / 1000,
  );
  const normalSeconds = Number.parseInt(time_to_station_normal_mins) * 60;
  const rushSeconds = Number.parseInt(time_to_station_rush_mins) * 60;
  let state = "chill";

  // if number of seconds from now to expected time is less than the normal time to station then we're in a rush
  if (seconds < normalSeconds) {
    state = "run";
  }
  // if number of seconds from now to expected time is less than the rush time to station then we've missed it
  if (seconds < rushSeconds) {
    state = "missed";
  }

  return html`
    <div>
      ${state}
    </div>
  `;
};

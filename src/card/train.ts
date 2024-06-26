import { countdown } from "./countdown";
import { html } from "lit";
import { formatTime } from "../utils/formatTime";
import { runWalkChill } from "./runWalkChill";

type Train = {
  scheduled: string;
  perturbation: boolean;
  expected: string;
  platform: string;
  terminus: string;
};

const trainTime = ({
  scheduled,
  perturbation,
  expected,
}: {
  scheduled: string;
  perturbation: boolean;
  expected: string;
}) => {
  if (perturbation) {
    return html`
        <div class="text-xl">
          <div class="text-yellow-500">⚠️Delayed⚠️</div>
          <span class="line-through">
            ${formatTime(scheduled, false)}
          </span>
          &nbsp;
          <span class="text-red-500 font-black">
            ${formatTime(expected, false)}
          </span>
        </div>
      `;
  }
  return html`
      <div class="text-xl font-black">
        ${formatTime(scheduled, false)}
      </div>
    `;
};

export const trainElement = ({
  train,
  time_to_station_normal_mins,
  time_to_station_rush_mins,
  ideal_mins_waiting_at_station,
  show_terminates_at,
}: {
  train: Train;
  time_to_station_normal_mins: string;
  time_to_station_rush_mins: string;
  ideal_mins_waiting_at_station: string;
  show_terminates_at: boolean;
}) => {
  return html`
    <div>
      ${trainTime({
        scheduled: train.scheduled,
        perturbation: train.perturbation,
        expected: train.expected,
      })}

      <div
        class="text-xl ${
          train.platform === "1" ? "text-green-500" : "text-red-500"
        }"
      >
        Platform <span class="font-black">${train.platform}</span>
      </div>

      ${
        show_terminates_at
          ? html`
            <div class="w-100 text-xs text-slate-500">
              Terminates at <b>${train.terminus}</b>
            </div>
          `
          : ""
      }
    </div>
    ${countdown(train.expected)}
    ${runWalkChill({
      expected: train.expected,
      time_to_station_normal_mins,
      time_to_station_rush_mins,
      ideal_mins_waiting_at_station,
    })}
  `;
};

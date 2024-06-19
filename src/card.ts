import { LitElement, html, css, unsafeCSS } from "lit";
import { state } from "lit/decorators.js";
import { TrainCardConfig, CUSTOM_CARD_ID } from "./common";
import {
  HomeAssistant,
  LovelaceCardConfig,
  formatNumber,
} from "custom-card-helpers";
import styles from "./styles/dist.css";

type TrainScheduleState = {
  attributes: {
    trains: [
      {
        scheduled: string;
        platform: string;
        /** Final stop. "This train will terminate at ... " */
        terminus: string;
        /** If true the train is delayed */
        perturbation: boolean;
        /** Time, will be different from Scheduled if the train is feeling perturbed  */
        expected: string;
      }
    ];
  };
} | null;

export class TrainCard extends LitElement {
  @state() _title: string = "";
  private _element_id: string = "";
  @state() _train_schedule: TrainScheduleState = null;
  @state() _time: string = "__:__:__";
  private _clock_is_ticking: boolean = false;
  private _hass: any | undefined;
  private _time_to_station_normal: string = "";
  private _time_to_station_fast: string = "";

  setConfig(config: TrainCardConfig) {
    this._title = config.title;
    this._element_id = config.element_id;
    this._time_to_station_normal = config.time_to_station_normal;
    this._time_to_station_fast = config.time_to_station_fast;
    if (this._hass) {
      this.hass = this._hass;
    }
  }

  set hass(hass: any) {
    //when the hass state changes, pick out the value of the set for this card and ensure it is a type that can be displayed.
    this._hass = hass;

    if (!this._element_id) {
      this._train_schedule = null;
      return;
    }

    this._train_schedule = hass.states[this._element_id];
  }

  private _formatTime(time: string | Date, includeSecs: boolean) {
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
  }

  private _formatDigits(num: number) {
    return num.toString().padStart(2, "0");
  }

  private _formatCountdown(seconds: number) {
    const hours = this._formatDigits(Math.floor(seconds / 3600));
    const minutes = this._formatDigits(Math.floor((seconds % 3600) / 60));
    const remainingSeconds = this._formatDigits(seconds % 60);

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
  }

  static styles = css`
    ${unsafeCSS(styles)}
  `;

  private trainTime = ({
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
            ${this._formatTime(scheduled, false)}
          </span>
          &nbsp;
          <span class="text-red-500 font-black">
            ${this._formatTime(expected, false)}
          </span>
        </div>
      `;
    }
    return html`
      <div class="text-xl font-black">
        ${this._formatTime(scheduled, false)}
      </div>
    `;
  };

  render() {
    this._beginClock();
    return html`<ha-card>
      <div class="w-100 grid grid-cols-2 gap-8 p-4">
        <div class="text-xl">${this._title}</div>
        <div class="text-xl text-right">${this._time}</div>
        ${this._train_schedule?.attributes.trains.map(
          (train) => html`
            <div>
              ${this.trainTime({
                scheduled: train.scheduled,
                perturbation: train.perturbation,
                expected: train.expected,
              })}

              <div
                class="text-xl ${train.platform === "1"
                  ? "text-green-500"
                  : "text-red-500"}"
              >
                Platform <span class="font-black">${train.platform}</span>
              </div>

              <div class="w-100 text-xs text-slate-500">
                Terminates at <b>${train.terminus}</b>
              </div>
            </div>
            <div class="">
              Countdown<br />
              <span class="text-2xl font-black">
                ${this._formatCountdown(
                  Math.floor(
                    (new Date(train.scheduled).getTime() -
                      new Date().getTime()) /
                      1000
                  )
                )}
              </span>
            </div>
          `
        )}
      </div>
    </ha-card> `;
  }

  // card configuration
  static getConfigElement() {
    return document.createElement(CUSTOM_CARD_ID + "-editor");
  }

  private _beginClock = () => {
    if (this._clock_is_ticking) return;
    this._clock_is_ticking = true;
    setInterval(this._tickClock, 1000);
  };

  private _tickClock = () => {
    console.log("Tick");
    const time = new Date();
    this._time = this._formatTime(time, true);
  };
}

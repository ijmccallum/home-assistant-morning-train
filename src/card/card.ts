import { LitElement, html, css, unsafeCSS } from "lit";
import { state } from "lit/decorators.js";
import { CUSTOM_CARD_ID } from "../common";
import type {
  TrainCardConfig,
  HAEntity,
  TrainScheduleState,
  HASS,
} from "../types";
import styles from "../styles/dist.css";
import { cardHeader } from "./cardHeader";
import { formatTime } from "../utils/formatTime";
import { trainElement } from "./train";
import { errorUI } from "./error";

export class TrainCard extends LitElement {
  @state() _title = "";
  @state() _train_schedule: TrainScheduleState = null;
  @state() _train_entity: HAEntity | null = null;
  @state() _time = "__:__:__";
  private _clock_is_ticking = false;
  private _hass: HASS | undefined;
  private _train_schedule_entity_id = "";
  private _time_to_station_normal_mins = "";
  private _time_to_station_rush_mins = "";
  private _show_clock = true;
  private _show_title = true;

  setConfig(config: TrainCardConfig) {
    this._title = config.title;
    this._train_schedule_entity_id = config.element_id;
    this._time_to_station_normal_mins = config.time_to_station_normal_mins;
    this._time_to_station_rush_mins = config.time_to_station_rush_mins;
    this._show_clock = config.show_clock;
    this._show_title = config.show_title;

    if (this._hass) {
      this.hass = this._hass;
    }
  }

  set hass(hass: HASS) {
    this._hass = hass;

    if (!this._train_schedule_entity_id) {
      return;
    }

    this._train_schedule = hass.states[this._train_schedule_entity_id];
    this._train_entity = hass.entities[this._train_schedule_entity_id];
  }

  // card configuration
  static getConfigElement() {
    return document.createElement(`${CUSTOM_CARD_ID}-editor`);
  }

  private _beginClock = () => {
    if (this._clock_is_ticking) return;
    this._clock_is_ticking = true;
    setInterval(this._tickClock, 1000);
  };

  private _tickClock = () => {
    const time = new Date();
    this._time = formatTime(time, true);
  };

  static styles = css`${unsafeCSS(styles)}`;
  render() {
    this._beginClock();

    const title = () => {
      if (this._title) {
        return this._title;
      }
      if (this._train_entity?.friendly_name) {
        return this._train_entity.friendly_name;
      }
      if (this._train_schedule) {
        return this._train_schedule.entity_id;
      }
      return "Pick a train station";
    };

    const header = cardHeader({
      title: title(),
      time: this._time,
      show_title: this._show_title,
      show_clock: this._show_clock,
    });

    if (!this._train_schedule) {
      return html`<ha-card>
        ${errorUI("No train schedule object.")}
      </ha-card>`;
    }

    if (!this._train_schedule.attributes) {
      return html`<ha-card>
        ${errorUI("No train schedule attributes.")}
      </ha-card>`;
    }

    if (
      !this._train_schedule.attributes.trains ||
      this._train_schedule.attributes.trains.length === 0
    ) {
      return html`<ha-card>
        <div class="w-100 grid grid-cols-2 gap-8 p-4">
          ${header}
          <div class="col-span-2 text-center">No more trains for now.</div>
        </div>
      </ha-card>`;
    }

    console.log("4");
    return html`<ha-card>
      <div class="w-100 grid grid-cols-2 gap-8 p-4">
        ${header}
        ${this._train_schedule?.attributes.trains.map((train) => {
          if (train.expected === "Cancelled") {
            return html`
              <div class="text-xl text-red-500 font-black">
                <div class="line-through">
                  ${formatTime(train.scheduled, false)}
                </div>
                <div>Cancelled</div>
              </div>
            `;
          }
          return trainElement({
            train,
            time_to_station_normal_mins: this._time_to_station_normal_mins,
            time_to_station_rush_mins: this._time_to_station_rush_mins,
          });
        })}
      </div>
    </ha-card> `;
  }
}

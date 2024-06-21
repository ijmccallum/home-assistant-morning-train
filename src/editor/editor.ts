import { LitElement, html, css, unsafeCSS } from "lit";
import { property, state } from "lit/decorators.js";
import type { TrainCardConfig } from "../types";
import type {
  HomeAssistant,
  LovelaceCardConfig,
  LovelaceCardEditor,
} from "custom-card-helpers";
import styles from "../styles/dist.css";
import { textField } from "./textField";
import { durationField } from "./durationField";
import { loadEntityPicker, entityPicker } from "./entityPicker";

export const CUSTOM_CARD_ID: string = "my-lit-card";

export class TrainCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() _config: LovelaceCardConfig = { type: CUSTOM_CARD_ID };

  MyLitCardEditor() {
    console.log("Loaded Editor");
  }

  setConfig(config: TrainCardConfig): void {
    this._config = config;
    // Preload the HA Entity Picker
    loadEntityPicker();
  }

  _change(ev: Event) {
    const target = ev.target as HTMLInputElement;
    ev.stopPropagation();
    // this._config is readonly, copy needed
    const newValue: string | undefined = target.value;
    if (newValue === this._config[target.id]) return;
    const newConfig = Object.assign({}, this._config);
    if (newValue === "" || newValue === undefined) delete newConfig[target.id];
    else newConfig[target.id] = target.value;
    const messageEvent = new CustomEvent("config-changed", {
      detail: { config: newConfig },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(messageEvent);
  }

  static styles = css`${unsafeCSS(styles)}`;

  render() {
    return html`<div class="grid grid-cols-3 gap-4">
      <div class="col-span-2">
        ${textField({ name: "title", label: "Title", required: false, value: this._config.title || "", change: this._change })}
      </div>
      <div class="col-span-2">
        ${entityPicker({
          name: "element_id",
          label: "Entity to Show",
          hass: this.hass,
          change: this._change,
          value: this._config.element_id ?? "",
        })}
      </div>
      <div class="col-span-3">
        <p>Time to Station: normal.</p>
      </div>
      ${durationField({
        change: this._change,
        label: "hours",
        id: "time_to_station_normal_hours",
        value: this._config.time_to_station_normal_hours ?? "",
      })}
      ${durationField({
        change: this._change,
        label: "mins",
        id: "time_to_station_normal_mins",
        value: this._config.time_to_station_normal_mins ?? "",
      })}

      <div class="col-span-3">
        <p>Time to Station: rushing.</p>
      </div>
      ${durationField({
        change: this._change,
        label: "hours",
        id: "time_to_station_rush_hours",
        value: this._config.time_to_station_rush_hours ?? "",
      })}
      ${durationField({
        change: this._change,
        label: "mins",
        id: "time_to_station_rush_mins",
        value: this._config.time_to_station_rush_mins ?? "",
      })}
    </div> `;
  }
}

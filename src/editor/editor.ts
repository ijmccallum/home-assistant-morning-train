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
import { switchField } from "./checkboxField";
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
    ev.stopPropagation();
    const target = ev.target as HTMLInputElement;

    const newValue: string | boolean | undefined = (() => {
      if (target.tagName === "HA-SWITCH") return target.checked;
      return target.value;
    })();
    const currentConfigValue = this._config[target.id];

    if (newValue === currentConfigValue) {
      // No change
      return;
    }

    const newConfig = Object.assign({}, this._config);
    if (newValue === "" || newValue === undefined) {
      delete newConfig[target.id];
      return;
    }

    newConfig[target.id] = newValue;
    const messageEvent = new CustomEvent("config-changed", {
      detail: { config: newConfig },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(messageEvent);
  }

  static styles = css`${unsafeCSS(styles)}`;

  render() {
    return html`<div class="grid grid-cols-2 gap-4">
      <div>
        ${switchField({
          id: "show_title",
          value: this._config.show_title,
          label: "Show Title?",
          change: this._change,
        })}
      </div>
      <div>
        ${switchField({
          id: "show_clock",
          value: this._config.show_clock,
          label: "Show Clock?",
          change: this._change,
        })}
      </div>
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
      <div class="col-span-2">
        <p>How long does it take to get to the Station? (in minutes)</p>
      </div>
      ${durationField({
        change: this._change,
        label: "Relaxed pace",
        id: "time_to_station_normal_mins",
        value: this._config.time_to_station_normal_mins ?? "",
      })}
      ${durationField({
        change: this._change,
        label: "When you're in a rush",
        id: "time_to_station_rush_mins",
        value: this._config.time_to_station_rush_mins ?? "",
      })}
    </div> `;
  }
}

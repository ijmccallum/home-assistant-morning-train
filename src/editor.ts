import { LitElement, html, css, unsafeCSS } from "lit";
import type { TemplateResult } from "lit";
import { property, state } from "lit/decorators.js";
import type { TrainCardConfig } from "./common";
import type {
  HomeAssistant,
  LovelaceCardConfig,
  LovelaceCardEditor,
  LovelaceConfig,
} from "custom-card-helpers";
import styles from "./styles/dist.css";

type HAEntity = {
  entity_id: string;
  friendly_name?: string;
  last_changed: string;
  last_updated: string;
  state: string;
  strings: string[];
  context: object;
  attributes: object;
};

//this.hass.states an object of entity ids

export const CUSTOM_CARD_ID: string = "my-lit-card";

export class TrainCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() _config: LovelaceCardConfig = { type: CUSTOM_CARD_ID };

  MyLitCardEditor() {
    console.log("Loaded Editor");
  }

  static styles = css`
    ${unsafeCSS(styles)}
  `;

  setConfig(config: TrainCardConfig): void {
    this._config = config;
    // Preload the HA Entity Picker
    this.loadEntityPicker();
  }

  private entityPicker(name: string, label: string): TemplateResult {
    const hasValidEntities = () => {
      const validEntities = Object.keys(this.hass.states).filter((entity) =>
        entity.includes("sensor.train_schedule_"),
      );
      return validEntities.length > 0;
    };

    if (hasValidEntities()) {
      return html`
        <div class="py-4">
          <div class="font-black text-red-500">
            No valid entities found.
          </div> 
          <div>
            Make sure you have set up the entities. (<a class="underline text-blue-500" href="https://github.com/ijmccallum/home-assistant-morning-train">Setup Instructions</a>).
          </div>
          <ul class="italic">
            <li>
              (An <a class="underline text-blue-500" href="/config/entities">entity</a> is considered <span class="font-black">valid</span> by this card when it has an <span class="font-black">id</span> that starts with <span class="font-black">"sensor.train_schedule_"</span.
            </li>
            <li>
              If you are totally flummoxed, <a class="underline text-blue-500" href="https://github.com/ijmccallum/home-assistant-morning-train">jump into the code</a>!
            </li>
          </ul>
        </div>
      `;
    }

    return html`
      <ha-entity-picker
        id="${name}"
        .hass=${this.hass}
        label="${label} (Optional)"
        .value=${this._config[name] ?? ""}
        @value-changed=${this._change}
        allow-custom-entity
        .entityFilter=${(entity: HAEntity) => {
          return entity.entity_id.includes("sensor.train_schedule_");
        }}
      >
      </ha-entity-picker>
    `;
  }

  private textField(
    name: string,
    label: string,
    required = false,
  ): TemplateResult {
    return html`
      <ha-textfield
        id=${name}
        type="string"
        .value=${this._config[name] ?? ""}
        label="${label} (${required ? "Required" : "Optional"})"
        name=${name}
        @change=${this._change}
        no-spinner
        .required=${required}
        min="0"
      >
      </ha-textfield>
    `;
  }

  render() {
    return html`<div class="grid grid-cols-3 gap-4">
      <div class="col-span-2">
        ${this.textField("title", "Title", false)}
      </div>
      <div class="col-span-2">
        ${this.entityPicker("element_id", "Entity to Show")}
      </div>
      <div class="col-span-3">
        <p>Time to Station: normal.</p>
      </div>
      <ha-textfield
        id="time_to_station_normal_hours"
        class="flex-1"
        type="number"
        .value=${this._config.time_to_station_normal_hours ?? ""}
        label="Hours"
        placeholder="00"
        name="time_to_station_normal_hours"
        @change=${this._change}
        no-spinner
        min="0"
      >
      </ha-textfield>
      <ha-textfield
        id="time_to_station_normal_mins"
        class="flex-1"
        type="number"
        .value=${this._config.time_to_station_normal_mins ?? ""}
        label="Mins"
        placeholder="00"
        name="time_to_station_normal_mins"
        @change=${this._change}
        no-spinner
        min="0"
        max="59"
      >
      </ha-textfield>
      <ha-textfield
        id="time_to_station_normal_secs"
        class="flex-1"
        type="number"
        .value=${this._config.time_to_station_normal_secs ?? ""}
        label="Secs"
        placeholder="00"
        name="time_to_station_normal_secs"
        @change=${this._change}
        no-spinner
        min="0"
        max="59"
      >
      </ha-textfield>

      <div class="col-span-3">
        <p>Time to Station: rushing.</p>
      </div>
      <ha-textfield
        id="time_to_station_rush_hours"
        class="flex-1"
        type="number"
        .value=${this._config.time_to_station_rush_hours ?? ""}
        label="Hours"
        placeholder="00"
        name="time_to_station_rush_hours"
        @change=${this._change}
        no-spinner
        min="0"
      >
      </ha-textfield>
      <ha-textfield
        id="time_to_station_rush_mins"
        class="flex-1"
        type="number"
        .value=${this._config.time_to_station_rush_mins ?? ""}
        label="Mins"
        placeholder="00"
        name="time_to_station_rush_mins"
        @change=${this._change}
        no-spinner
        min="0"
        max="59"
      >
      </ha-textfield>
      <ha-textfield
        id="time_to_station_rush_secs"
        class="flex-1"
        type="number"
        .value=${this._config.time_to_station_rush_secs ?? ""}
        label="Secs"
        placeholder="00"
        name="time_to_station_rush_secs"
        @change=${this._change}
        no-spinner
        min="0"
        max="59"
      >
    </div> `;
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

  /**
   * Need this to load the HA elements we want to re-use
   * see: https://github.com/thomasloven/hass-config/wiki/PreLoading-Lovelace-Elements
   * */

  async loadEntityPicker() {
    if (!window.customElements.get("ha-entity-picker")) {
      const ch = await (window as any).loadCardHelpers();
      const c = await ch.createCardElement({ type: "entities", entities: [] });
      await c.constructor.getConfigElement();
      // Since ha-elements are not using scopedRegistry we can get a reference to
      // the newly loaded element from the global customElement registry...
      const haEntityPicker = window.customElements.get("ha-entity-picker");
    }
  }
}

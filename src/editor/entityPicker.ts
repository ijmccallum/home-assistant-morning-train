import type { TemplateResult } from "lit-element";
import { html } from "lit-element";
import type { HAEntity } from "../types";
import type { HomeAssistant } from "custom-card-helpers";
import type { LovelaceCardConfig, LovelaceCard } from "custom-card-helpers";

type CustomCard = {
  type: string;
  name: string;
  description: string;
};

declare global {
  interface Window {
    customCards: CustomCard[];
    loadCardHelpers: () => Promise<{
      createCardElement: (config: LovelaceCardConfig) => LovelaceCard & {
        constructor: { getConfigElement: () => Promise<HTMLElement> };
      };
    }>;
  }
}

/**
 * Need this to load the HA elements we want to re-use
 * see: https://github.com/thomasloven/hass-config/wiki/PreLoading-Lovelace-Elements
 * */

export const loadEntityPicker = async () => {
  if (!window.customElements.get("ha-entity-picker")) {
    const ch = await window.loadCardHelpers();
    const c = await ch.createCardElement({ type: "entities", entities: [] });
    await c.constructor.getConfigElement();
    // Since ha-elements are not using scopedRegistry we can get a reference to
    // the newly loaded element from the global customElement registry...
    const haEntityPicker = window.customElements.get("ha-entity-picker");
  }
};

export const entityPicker = ({
  name,
  label,
  hass,
  change,
  value,
}: {
  name: "element_id";
  label: "Entity to Show";
  hass: HomeAssistant;
  change: (arg0: Event) => void;
  value: string;
}): TemplateResult => {
  const hasValidEntities = () => {
    const validEntities = Object.keys(hass.states).filter((entity) =>
      entity.includes("sensor.train_schedule_"),
    );
    return validEntities.length > 0;
  };

  if (!hasValidEntities()) {
    return html`
      <div class="py-4">
        <div class="font-black text-red-500">
          No valid entities found.
        </div> 
        <ul class="list-disc pl-4">
          <li>
            Make sure you have set up the natioonal rail integration entities. (<a class="underline text-blue-500" href="https://github.com/ijmccallum/home-assistant-morning-train">Setup Instructions</a>).
          </li>
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
      .hass=${hass}
      label="${label}"
      .value=${value}
      @value-changed=${change}
      allow-custom-entity
      .entityFilter=${(entity: HAEntity) => {
        return entity.entity_id.includes("sensor.train_schedule_");
      }}
    >
    </ha-entity-picker>
  `;
};

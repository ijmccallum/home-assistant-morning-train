import type { TemplateResult } from "lit";
import { html } from "lit";

export const durationField = ({
  id,
  value,
  label,
  change,
}: {
  id: string;
  value: string;
  label: string;
  change: (arg0: Event) => void;
}): TemplateResult => {
  return html`
      <ha-textfield
        id="${id}"
        class="flex-1"
        type="number"
        .value=${value}
        label="${label}"
        placeholder="00"
        name="${id}"
        @change=${change}
        no-spinner
        min="0"
      >
      </ha-textfield>
    `;
};

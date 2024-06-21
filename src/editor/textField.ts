import type { TemplateResult } from "lit";
import { html } from "lit";

export const textField = ({
  name,
  value,
  label,
  required,
  change,
}: {
  name: string;
  value: string;
  label: string;
  required: boolean;
  change: (arg0: Event) => void;
}): TemplateResult => {
  return html`
      <ha-textfield
        id=${name}
        type="string"
        .value=${value}
        label="${label} (${required ? "Required" : "Optional"})"
        name=${name}
        @change=${change}
        no-spinner
        .required=${required}
        min="0"
        style="width: 100%"
      >
      </ha-textfield>
    `;
};

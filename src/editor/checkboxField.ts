import type { TemplateResult } from "lit";
import { html } from "lit";

export const switchField = ({
  id,
  value,
  label,
  change,
}: {
  id: string;
  value: boolean;
  label: string;
  change: (arg0: Event) => void;
}): TemplateResult => {
  return html`
    <div style="display: flex; align-items: center;">
      <ha-switch
        id=${id}
        .checked=${value}
        label="${label}"
        name=${id}
        @change=${change}
      >
      </ha-switch>
      <label for=${id} style="margin-left: 8px;">
        ${label}
      </label>
    </div>
    `;
};

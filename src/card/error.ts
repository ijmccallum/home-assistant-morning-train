import { html } from "lit-html";

export const errorUI = (errorMessage: string) => {
  return html`
    <div class="text-xl font-red-500">
      ${errorMessage}
    </div>
  `;
};

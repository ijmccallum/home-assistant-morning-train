import { html } from "lit-element";

export const cardHeader = ({
  title,
  time,
  show_title,
  show_clock,
}: {
  title: string;
  time: string;
  show_title: boolean;
  show_clock: boolean;
}) => {
  if (!show_title && !show_clock) return html``;

  return html`
    <div class="text-xl">${show_title ? title : ""}</div>
    <div class="text-xl text-right">${show_clock ? time : ""}</div>
  `;
};

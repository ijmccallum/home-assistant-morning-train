import { CUSTOM_CARD_ID } from "./common";
import { TrainCard } from "./card/card";
import { TrainCardEditor } from "./editor/editor";

customElements.define(CUSTOM_CARD_ID, TrainCard);
customElements.define(`${CUSTOM_CARD_ID}-editor`, TrainCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: CUSTOM_CARD_ID,
  name: "Morning Train Card",
  description: "When is the next train? Will I Make it?",
});

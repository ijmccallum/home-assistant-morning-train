import { LovelaceCardConfig } from "custom-card-helpers";

export const CUSTOM_CARD_ID: string = "morning-train-card";

export interface TrainCardConfig extends LovelaceCardConfig {
  title: string;
  element_id: string;
  time_to_station_normal: string;
  time_to_station_fast: string;
}
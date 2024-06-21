import type { LovelaceCardConfig } from "custom-card-helpers";

export interface TrainCardConfig extends LovelaceCardConfig {
  title: string;
  element_id: string;
  time_to_station_normal_hours: string;
  time_to_station_normal_mins: string;
  time_to_station_normal_secs: string;
  time_to_station_fast_hours: string;
  time_to_station_fast_mins: string;
  time_to_station_fast_secs: string;
}

export type HAEntity = {
  entity_id: string;
  friendly_name?: string;
  last_changed: string;
  last_updated: string;
  state: string;
  strings: string[];
  context: object;
  attributes: object;
};

export type TrainScheduleState = {
  entity_id: string;
  attributes: {
    trains: [
      {
        scheduled: string;
        platform: string;
        /** Final stop. "This train will terminate at ... " */
        terminus: string;
        /** If true the train is delayed */
        perturbation: boolean;
        /** Time, will be different from Scheduled if the train is feeling perturbed  */
        expected: string | "Cancelled";
      },
    ];
  };
} | null;

export type HASS = {
  states: {
    [entity_id: string]: TrainScheduleState;
  };
  entities: {
    [entity_id: string]: HAEntity;
  };
};

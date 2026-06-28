const ENTITY_ID = "sensor.morning_train";

const scenarios = {
  normal: {
    hass: {
      states: {
        [ENTITY_ID]: {
          entity_id: ENTITY_ID,
          attributes: {
            trains: [
              // On-time
              {
                scheduled: "2026-07-01T08:15:00",
                perturbation: false,
                expected: "2026-07-01T08:15:00",
                platform: "1",
                terminus: "London King's Cross",
              },
              // Delayed / perturbed
              {
                scheduled: "2026-07-01T08:45:00",
                perturbation: true,
                expected: "2026-07-01T08:55:00",
                platform: "2",
                terminus: "Peterborough",
              },
              // Cancelled
              {
                scheduled: "2026-07-01T09:00:00",
                perturbation: false,
                expected: "Cancelled",
                platform: "3",
                terminus: "King's Lynn",
              },
              // Perturbed but earlier than scheduled (early)
              {
                scheduled: "2026-07-01T09:30:00",
                perturbation: true,
                expected: "2026-07-01T09:25:00",
                platform: "5",
                terminus: "Ely",
              },
              // Past train (already gone)
              {
                scheduled: "2026-06-28T06:00:00",
                perturbation: false,
                expected: "2026-06-28T06:00:00",
                platform: "6",
                terminus: "London Liverpool St",
              },
              // Additional normal train
              {
                scheduled: "2026-07-01T10:00:00",
                perturbation: false,
                expected: "2026-07-01T10:00:00",
                platform: "1",
                terminus: "Cambridge",
              },
            ],
          },
        },
      },
      entities: {
        [ENTITY_ID]: {
          entity_id: ENTITY_ID,
          friendly_name: "Cambridge Station",
          last_changed: "2026-06-28T07:00:00Z",
          last_updated: "2026-06-28T07:00:00Z",
          state: "on",
          strings: [],
          context: {},
          attributes: {},
        },
      },
    },
  },
  delayed: {
    hass: {
      states: {
        [ENTITY_ID]: {
          entity_id: ENTITY_ID,
          attributes: {
            trains: [
              {
                scheduled: "2026-07-01T08:15:00",
                perturbation: true,
                expected: "2026-07-01T08:27:00",
                platform: "4",
                terminus: "London King's Cross",
              },
            ],
          },
        },
      },
      entities: {
        [ENTITY_ID]: {
          entity_id: ENTITY_ID,
          friendly_name: "Cambridge Station",
          last_changed: "2026-06-28T07:00:00Z",
          last_updated: "2026-06-28T07:00:00Z",
          state: "on",
          strings: [],
          context: {},
          attributes: {},
        },
      },
    },
  },
  cancelled: {
    hass: {
      states: {
        [ENTITY_ID]: {
          entity_id: ENTITY_ID,
          attributes: {
            trains: [
              {
                scheduled: "2026-07-01T08:15:00",
                perturbation: false,
                expected: "Cancelled",
                platform: "3",
                terminus: "London King's Cross",
              },
            ],
          },
        },
      },
      entities: {
        [ENTITY_ID]: {
          entity_id: ENTITY_ID,
          friendly_name: "Cambridge Station",
          last_changed: "2026-06-28T07:00:00Z",
          last_updated: "2026-06-28T07:00:00Z",
          state: "on",
          strings: [],
          context: {},
          attributes: {},
        },
      },
    },
  },
  empty: {
    hass: {
      states: {
        [ENTITY_ID]: {
          entity_id: ENTITY_ID,
          attributes: {
            trains: [],
          },
        },
      },
      entities: {
        [ENTITY_ID]: {
          entity_id: ENTITY_ID,
          friendly_name: "Cambridge Station",
          last_changed: "2026-06-28T07:00:00Z",
          last_updated: "2026-06-28T07:00:00Z",
          state: "on",
          strings: [],
          context: {},
          attributes: {},
        },
      },
    },
  },
  missing: {
    hass: {
      states: {},
      entities: {},
    },
  },
  "no-attributes": {
    hass: {
      states: {
        [ENTITY_ID]: {
          entity_id: ENTITY_ID,
          attributes: null,
        },
      },
      entities: {
        [ENTITY_ID]: {
          entity_id: ENTITY_ID,
          friendly_name: "Cambridge Station",
          last_changed: "2026-06-28T07:00:00Z",
          last_updated: "2026-06-28T07:00:00Z",
          state: "on",
          strings: [],
          context: {},
          attributes: {},
        },
      },
    },
  },
};

const getElement = (id) => document.getElementById(id);

const updatePreview = () => {
  const scenario = getElement("scenario-select").value;
  const title = getElement("title-input").value;
  const showTitle = getElement("show-title").checked;
  const showClock = getElement("show-clock").checked;
  const showTerminates = getElement("show-terminates-at").checked;
  const normalMins = getElement("normal-mins").value;
  const rushMins = getElement("rush-mins").value;
  const idealMins = getElement("ideal-mins").value;
  const longestMins = getElement("longest-mins").value;

  const container = getElement("card-container");
  container.innerHTML = "";

  const card = document.createElement("morning-train-card");
  card.setConfig({
    title: title || "Morning train",
    element_id: ENTITY_ID,
    time_to_station_normal_mins: normalMins,
    time_to_station_rush_mins: rushMins,
    ideal_mins_waiting_at_station: idealMins,
    longest_mins_waiting_at_station: longestMins,
    show_clock: showClock,
    show_title: showTitle,
    show_terminates_at: showTerminates,
  });
  card.hass = scenarios[scenario].hass;

  container.appendChild(card);
};

const attachListeners = () => {
  const ids = [
    "scenario-select",
    "title-input",
    "show-title",
    "show-clock",
    "show-terminates-at",
    "normal-mins",
    "rush-mins",
    "ideal-mins",
    "longest-mins",
  ];
  ids.forEach((id) => {
    const element = getElement(id);
    if (!element) return;
    element.addEventListener("input", updatePreview);
    element.addEventListener("change", updatePreview);
  });
};

window.addEventListener("DOMContentLoaded", () => {
  attachListeners();
  updatePreview();
});

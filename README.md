# Home Assistant Morning Train

_This is built against the UK National Rail API_

Very specific use case this one - I have a train to catch in the morning and I want to know if I'm going to make it, if I need to run for it, if I can casually wander over, or can I chill a bit.

## How to add it to your instance Home Assistant

## How to use it

## How to contribute

Get an overview of the project and the tech used.
Fork, update, PR back in.

### The tech

#### Frontend

- [Lit](https://lit.dev/) for rendering out the UI componets of both the card itself and the card editor view. (The `html\`` bit)
- [Home Assistant frontend](https://github.com/home-assistant/frontend), goes without saying really. The HA front end defines some web components that have been used in the editr view for this card. (The `<ha-textfield>` bit).
- [Material Web](https://material-web.dev/about/intro/) this is the UI framework that HA uses, (eg `<ha-textfield>` extends a Material Web component).

#### Build tools

- Rollup
- Tailwind
- TypeScript
- Biome
- Node

### Dev set up locally.

- Install Node
- Install Git
- Have VS Code (or your preferred editor) (but if you do go with VS Code, there are some recommended plugins in `./.vscode`)
- `npm i`

### VS Code plugins, @recommended

## Troubleshooting

## Credits

- https://github.com/grillp/ha-custom-card-rollup-ts-lit-starter - Starter project for custom cards
- https://github.com/jfparis/homeassistant_nationalrail - National Rail sensor
- https://lite.realtime.nationalrail.co.uk/OpenLDBWS/ - National Rail API

## License

This project uses the MIT License, reason being the [ha-custom-card-rollup-ts-lit-starter project I based it on](https://github.com/grillp/ha-custom-card-rollup-ts-lit-starter) uses the MIT License.

## TODOs

1. time config - Set different travel times for different (variable) platforms
2. Add setting up different train stations
3. Full local dev process - get it running!
4. docs - update this readme
5. Guidance for setting up the national rail integraiton (also move the national rail integration into this repo so it's an all in one?)
6. Easier HA install process for people looking to use this
7. Add configuration options: pick train stations
8. Add screenshots to the readme

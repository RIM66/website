# ShewenyClient

The main hub for interacting with the Discord API, and the starting point for any bot.

## Constructor

```js
new ShewenyClient(options);
```

| Name          | Type                                                                             | Description                                                                 | Optional |
| ------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | -------- |
| options       | [ShewenyClientOptions](../typedef/ShewenyClientOptions.md)                       | The options for the client                                                  | No       |
| clientOptions | [ClientOptions](https://discord.js.org/#/docs/main/stable/typedef/ClientOptions) | The options for the discord.js client (use first parameter if not provided) | ✓        |

:::details Properties

- [util](#util)
- [managers](#managers)
- [collections](#collections)

:::

:::details Methods

- [awaitReady](#awaitready)

:::

:::details Events

- [interactionButtonCreate](#interactionbuttoncreate)
- [interactionCommandCreate](#interactioncommandcreate)
- [interactionContextMenuCreate](#interactioncontextmenucreate)
- [interactionSelectMenuCreate](#interactionselectmenucreate)
- [interactionMessageComponentCreate](#interactionmessagecomponentcreate)

:::

## Properties

### util

Useful functions for your bot.

Return : [ClientUtil](../client/ClientUtil.md).

### managers

The managers of the client.

Return : [ShewenyClientManagers](../typedef/ShewenyClientManagers.md).

### collections

The collections of commands, events, buttons, select-menus, inhibitors.

Return : [ClientCollections](../typedef/ClientCollections.md)

## Methods

### awaitReady

Wait for the client to be ready.

Return Promise\<void>

## Events

### interactionButtonCreate

Emitted when an interaction button is created.

Parameters :

- interaction (type : [ButtonInteraction](https://discord.js.org/#/docs/main/stable/class/ButtonInteraction))

### interactionCommmandCreate

Emitted when an Slash Command or Context Menu is created.

Parameters :

- interaction (type : [CommandInteraction](https://discord.js.org/#/docs/main/stable/class/CommandInteraction) or [ContextMenuInteraction](https://discord.js.org/#/docs/main/stable/class/ContextMenuInteraction)))

### interactionContextMenuCreate

Emitted when an interaction Context Menu is created.

Parameters :

- interaction (type : [ContextMenuInteraction](https://discord.js.org/#/docs/main/stable/class/ContextMenuInteraction))

### interactionSelectMenuCreate

Emitted when an Select Menu interaction is created.

Parameters :

- interaction (type : [SelectMenuInteraction](https://discord.js.org/#/docs/main/stable/class/SelectMenuInteraction))

### interactionMessageComponentCreate

Emitted when an Message Component interaction is created.

Parameters :

- interaction (type : [MessageComponentInteraction](https://discord.js.org/#/docs/main/stable/class/MessageComponentInteraction))
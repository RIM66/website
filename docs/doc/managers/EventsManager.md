# EventsManager

Create an handler for bot events. The events can be in as many subfolders as desired.

## Constructor

```js
new CommandsManager(client, options);
```

| Name    | Type                                                   | Description                   | Default | Optional |
| ------- | ------------------------------------------------------ | ----------------------------- | ------- | -------- |
| client  | [ShewenyClient](./ShewenyClient.md)                    | The client                    | None    | No       |
| options | [BaseManagerOptions](../typedef/BaseManagerOptions.md) | Options of the events manager | None    | No       |

:::details Properties

- [client](#client)
- [directory](#directory)
- [events](#events)

:::

:::details Methods

- [loadAll](#loadall)
- [registerAll](#registerAll)
- [loadAndRegisterAll](#loadandregisterall)
- [unloadAll](#unloadall)

:::

## Properties

### client

The framework client.

Return : [ShewenyClient](../client/ShewenyClient.md)

### directory

The directory of events.

Return : [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### events

The collection of loaded events.

Return : Collection<[Event](../structures/Event.md)>

## Methods

### loadAll()

Load all inhibitors in directory of events.

Return : [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<Collection\<[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), [Event](./Event.md)>>

### registerAll(events)

Register loaded events and register them if no events exist.

Parameters :

- events (type: Collection\<[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), [Event](../structures/Event.md))>)

Return : [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<void>

### loadAndRegisterAll()

Load and register all events.

Return : [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<void>

### unloadAll()

Unload all events.

Return : void
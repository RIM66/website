# Buttons handler

Set up an buttons handler to load buttons interactions events.

## Setup in client

When setting up the client, it is possible to set the handler as a parameter :

:::: code-group
::: code-group-item JS CommonJS

```js
const { ShewenyClient } = require("sheweny");

const client = new ShewenyClient({
  intents: ["GUILDS"],
  handlers: {
    buttons: {
      directory: "./interactions/buttons",
    },
  },
});
```

:::
::: code-group-item TS ES Modules

```ts
import { ShewenyClient } from "sheweny";

const client = new ShewenyClient({
  intents: ["GUILDS"],
  handlers: {
    buttons: {
      directory: "./interactions/buttons",
    },
  },
});
```

:::
::::

## Setup with class

You can also use the class to set up the handler somewhere else :

:::: code-group
::: code-group-item JS CommonJS

```js
const { ShewenyClient, ButtonsManager } = require("sheweny");
const client = new ShewenyClient({ intents: ["GUILDS"] });

const ButtonsManager = new ButtonsManager(client, "./interactions/buttons");

ButtonsManager.loadAll();
```

:::
::: code-group-item TS ES Modules

```ts
import { ShewenyClient, ButtonsHandler } = from "sheweny";
const client = new ShewenyClient({ intents: ["GUILDS"] });

const ButtonsManager = new ButtonsManager(client, "./interactions/buttons");

ButtonsManager.loadAll()
```

:::
::::

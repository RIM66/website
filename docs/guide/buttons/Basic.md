# Basic button listener

With sheweny each button must be a class which extends from the [Button](../../doc/structures/Button.md) class

## Import Button

Import the [Button](../../doc/structures/Button.md) class :

:::: code-group
::: code-group-item CommonJS

```js
const { Button } = require("sheweny");
```

:::
::: code-group-item ESM

```js
import { Button } from "sheweny";
```

:::
::::

## Create the button listner

:::: code-group
::: code-group-item JS CommonJS

```js
const { Button } = require("sheweny");

module.exports = class Btns extends Button {
  constructor(client) {
    super(client, ["btnId1", "btnId2"]);
  }
  
  execute(button) {
    console.log(button);
  }
};
```

:::
::: code-group-item TS ES Modules

```ts
import { Button } from "sheweny";
import type { ShewenyClient } from "sheweny";
import type { ButtonInteraction } from "discord.js";

export class Btns extends Button {
  constructor(client: ShewenyClient) {
    super(client, ["btnId1", "btnId2"]);
  }

  execute(button: ButtonInteraction) {
    console.log(button);
  }
}
```

:::
::::

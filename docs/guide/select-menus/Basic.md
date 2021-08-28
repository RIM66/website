# Basic select-menu listener

With sheweny each selectMenu must be a class which extends from the [SelectMenu](../../doc/structures/SelectMenu.md) class

## Import SelectMenu

Import the [SelectMenu](../../doc/structures/SelectMenu.md) class :

:::: code-group
::: code-group-item CommonJS

```js
const { SelectMenu } = require("sheweny");
```

:::
::: code-group-item ESM

```js
import { SelectMenu } from "sheweny";
```

:::
::::

## Create the select-menu listner

:::: code-group
::: code-group-item JS CommonJS

```js
const { SelectMenu } = require("sheweny");

module.exports = class SelectMenus1And2 extends SelectMenu {
  constructor(client) {
    super(client, ["selectMId1", "selectMId2"]);
  }

  execute(selectMenu) {
    console.log(selectMenu);
  }
};
```

:::
::: code-group-item TS ES Modules

```ts
import { SelectMenu } from "sheweny";
import type { ShewenyClient } from "sheweny";
import type { SelectMenuInteraction } from "discord.js";

export class SelectMenus1And2 extends SelectMenu {
  constructor(client: ShewenyClient) {
    super(client, ["selectMId1", "selectMId2"]);
  }

  execute(selectMenu: SelectMenuInteraction) {
    console.log(selectMenu);
  }
}
```

:::
::::

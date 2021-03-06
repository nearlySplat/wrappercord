# 不和 (fuwa)

不和 (fuwa, meaning "discord" or "disagreement") is a small Discord API wrapper for Node.js made as a kind of experiment and learning experience. Originally written in JavaScript, it is now being re-written in [TypeScript](https://typescriptlang.org).

**Note**: This library is not published to the [npm](https://npmjs.com) [registry](https://registry.npmjs.com), yet. It is planned to publish it once basic functionality is implemented.

## Installation

[Node.js](https://nodejs.org) version 14.x.x or higher is required for this library.

Installing with [pnpm](https://pnpm.io), npm or [Yarn](https://yarnpkg.com) is simple. I don't know any other package managers.

```sh
# with npm
npm install --save nearlysplat/fuwa

# with yarn
yarn add github:nearlysplat/fuwa

# with pnpm
pnpm add nearlysplat/fuwa
```

## Usage

While developing Fuwa, I was aiming for a near-[discord.js](https://discord.js.org) or [Eris](https://abal.moe/Eris) feel.

An example client is this:
```ts
import { Client, Intents } from "fuwa";
// replace this with your token
const client = new Client("my_token", {
  intents: Intents.NON_PRIVILEDGED // non priviledged intents
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.username}#${client.user.tag}!`);
});

client.on("messageCreate", (msg) => {
  if (msg.content === "!ping") msg.channel.messages.create("Pong!");
})

client.connect();
```

### Documentation
Advanced documentation is available at the [website](https://nearlysplat.github.io/fuwa), generated by [TypeDoc](https://typedoc.org/).


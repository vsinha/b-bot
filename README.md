### Bot Bot Bot Chat Bot

A [hubot](https://hubot.github.com/)-based chat bot written in typescript, configured with the hubot-rocketchat adapter.

Based on the typescript [hubot-example](https://github.com/AcklenAvenue/hubot-example) project because typescript is thebomb.com

## Instructions

- Source lives in the `src/` directory (ie scripts are in `src/scripts/*.ts`.
- The typescript source is compiled to javascript which lives in `./build/scripts/`. Hubot is booted from the `./build` dir.
- *Do not commit `.js` files!* They will be generated at docker container build time
- This repo automagically gets built into a docker container [here](https://hub.docker.com/r/viosi/bbot)

### To run locally

```bash
# install dependencies
npm install

# build
npm run lint
npm run build

# run a local chat session with hubot!
npm start
```

### To develop
```bash
npm run watch # will automatically rebuild on any source file changes
npm start
```

### To develop with VSCode like a real pro
```bash
code ./ # open this puppy up
```

```
# from inside VSCode
`<cmd+shift+p> Run Task -> npm watch`
```
the linter also will run automagically if installed

## Contributing

Happy to merge PRs!

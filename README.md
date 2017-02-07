# wowtoken-to-slack
Node.JS script sending slack message with current WoW token price for a specific region

## Features
- Send notification to a Slack webhook with the World Of Warcraft token's current price in a specific region

## Installation
- Simply clone this depot anywhere on your server.
- Copy [config.json.exemple](https://github.com/BernardJeremy/twitch-to-slack/blob/master/wowtoken.json.example) file into a `config.json` file.
- Perform `npm install` command.
- Install a [incoming-webhooks](https://api.slack.com/incoming-webhooks) on your Slack.
- Add your link of the Slack incoming-webhooks in the `config.json` file.
- Specify you region in the same `config.json` file (EU, NA, KR, CN or TW)
- Optional (but recommended) : Install a task scheduler (like `CRON`) to run the script regularly.

## Configuration
- `tokenAPILink` : Link to the token API JSON page (You shouldn't have to change this).
- `region` : Targeted region.
- `slackHookUrl` :  Link to your Slack incoming-webhooks.
- `slackHookName` :  Name to display when you will get notified on Slack.
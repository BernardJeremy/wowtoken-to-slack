const request = require('request');
const Slack = require('slack-node');

// Retrieve config
const tokenAPILink = require('./config.json').tokenAPILink;
const region = require('./config.json').region;
const slackUrl = require('./config.json').slackHookUrl;
const slackName = require('./config.json').slackHookName;


// Send the slack message to the config's webhook
function sendSlackMessage(price, updatedDate) {
  let text = 'WoW Token Price [' + region + '] : ';
  text += '*' + price + '* (' + updatedDate + ') ';
  text += '<https://wowtoken.info>';

  const msgParameters = {
    username: slackName,
    text: text,
  };

  const slack = new Slack();
  slack.setWebhook(slackUrl);
  
  slack.webhook(msgParameters, function (err, response) {
    if (response.statusCode != 200) {
      console.log(err, response);
    }
  });
}

// Retrieve Token API link
function retrieveApiLink() {
  return tokenAPILink;
}

request(retrieveApiLink(), function (err, resp, html) {
  if (err) return console.error(err);

  const data = JSON.parse(html);
  const formattedData = data[region].formatted;

  sendSlackMessage(formattedData.buy, formattedData.updated);
});
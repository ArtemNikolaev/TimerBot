const start = require('./components/start.component');
const message = require('./components/message.component');

require('./services/checkingRequirements.service');

const bot = require('./components/bot.component');

bot.start(start);
bot.on('message', message);

bot.startPolling();

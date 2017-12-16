const log = require('./logger.component');
const appeal = require('../services/appeal.service');

/**
 * '/start' command logic
 * @param {object} ctx
 * @return {*}
 */
function start(ctx) {
  const data = ctx.update.message;
  const message = appeal.user(data.from) +
    ` from ` +
    appeal.chat(data.chat) +
    ` chat see welcome message`;

  log.debug(message);
  log.debug({
    message: {
      from: data.from,
      chat: data.chat
    }
  });

  return ctx.reply('Welcome!');
}

module.exports = start;

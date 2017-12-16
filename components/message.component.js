const log = require('./logger.component');
const appeal = require('../services/appeal.service');
const timer = require('../services/timer');
const start = require('./start.component');

/**
 * Represents 'message' function
 * @param {object} ctx
 * @return {*}
 */
function message(ctx) {
  const data = ctx.update.message;
  log.debug(appeal.user(data.from) +
    ` from ` +
    appeal.chat(data.chat) +
    ` sends: ` +
    data.text
  );

  return timer(data.text, data.chat.id)
    .then(() => { ctx.reply('Timer was created!'); })
    .catch((err) => {
      ctx.reply(err);

      start(ctx);
    });
}

module.exports = message;

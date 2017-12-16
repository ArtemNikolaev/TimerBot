const log = require('../components/logger.component');

/**
 * Checking all stuff, that needed for running application well
 */
function checkingRequirements() {
  if (!process.env.TIMER_BOT_TOKEN) {
    log.fatal('TIMER_BOT_TOKEN is required for running application!');

    process.exit();
  }
}

module.exports = checkingRequirements();

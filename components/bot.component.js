const Telegraf = require('telegraf');

const TelegrafSymbol = Symbol.for('TimerBot.Telegraf');

const globalSymbols = Object.getOwnPropertySymbols(global);
const hasTelegraf = (globalSymbols.indexOf(TelegrafSymbol) > -1);

if (!hasTelegraf) {
  global[TelegrafSymbol] = new Telegraf(process.env.TIMER_BOT_TOKEN);
}

const singleton = {};

Object.defineProperty(singleton, 'instance', {
  get: function() {
    return global[TelegrafSymbol];
  }
});

Object.freeze(singleton);

module.exports = singleton.instance;

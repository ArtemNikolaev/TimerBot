const bunyan = require('bunyan');
const bformat = require('bunyan-format');
const formatOut = bformat({outputMode: 'short'});

const Bunyan = Symbol.for('TimerBot.Bunyan');

const globalSymbols = Object.getOwnPropertySymbols(global);
const hasBunyan = (globalSymbols.indexOf(Bunyan) > -1);

if (!hasBunyan) {
  global[Bunyan] = bunyan.createLogger(
    {
      name: 'TimerBot',
      stream: formatOut,
      level: 'debug'
    }
  );
}

const singleton = {};

Object.defineProperty(singleton, 'instance', {
  get: function() {
    return global[Bunyan];
  }
});

Object.freeze(singleton);

module.exports = singleton.instance;

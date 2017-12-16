const telegram = require('../components/bot.component').telegram;

const timeConstant = {
  s: 1*1000,
  m: 60* 1000,
  h: 60 * 60 * 1000
};

/**
 * Parse timeStr to get timing
 * @param {object} object
 * @return {Promise<object>}
 */
function parseTimeStr({timeStr, txt}) {
  return new Promise((resolve, reject) => {
    if (!txt) txt = 'Timer Worked!';
    const element = [];

    const regEx = /\d*\w/g;

    {
      let myArray;
      while ((myArray = regEx.exec(timeStr)) !== null) {
        element.push(myArray[0]);
      }
    }

    element.forEach((el, index, array) => {
      let number = /\d*/g.exec(el);
      let multiplicator = /[smh]/.exec(el);

      if (number) number = number[0];
      if (multiplicator) multiplicator = multiplicator[0];

      array[index] = number * timeConstant[multiplicator];
    });

    const notInt = element.some((item) => isNaN(item));

    if (notInt || !element.length) {
      reject('Bad Timer Rule!');
    } else {
      let sum = 0;

      element.forEach((item)=> sum+=item);

      resolve({sum, txt});
    }
  });
}

/**
 * Parse message to get timeout and txt
 * @param {string} message
 * @return {Promise<object>}
 */
function parseMessage(message) {
  return new Promise((resolve, reject) => {
    const obj = {
      timeStr: null,
      txt: null
    };

    const strArr = message.split(' ');

    obj.timeStr = strArr.shift();
    obj.txt = strArr.join(' ');

    resolve(obj);
  });
}

/**
 * Main timer func
 * @param {string}message
 * @param {object} chat
 * @return {Promise<null>}
 */
function timer(message, chat) {
  return parseMessage(message)
    .then(parseTimeStr)
    .then(({sum, txt}) => {
      setTimeout(()=> {
        telegram.sendMessage(chat, txt);
      }, sum);

      return Promise.resolve();
    });
}

module.exports = timer;

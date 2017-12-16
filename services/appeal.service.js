/**
 * Build user name from 'from' ctx parameter
 * @param {object} from
 * @return {string}
 */
function user(from) {
  if (from.first_name && from.last_name) {
    return from.first_name + ' ' + from.last_name;
  } else {
    return from.username;
  }
}

/**
 * Build group name from 'chat' ctx parameter
 * @param {object} chat
 * @return {string}
 */
function chat(chat) {
  if (chat.type === 'private') {
    return 'private';
  } else {
    return `'${chat.title}' group`;
  }
}

module.exports = {
  user,
  chat
};

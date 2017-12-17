# TimerBot

Telegram bot for remind yourself about smthng.

#####How to run:
1. `git clone https://github.com/ArtemNikolaev/TimerBot.git`
2. `npm install`
3. `node index TIMER_BOT_TOKEN=<your telegram bot token>`

#####How it's works:

- Bot understand Jira-like time messages:

`1h`, `1m`, `1s`

then create timer for this and send you message back, when timer is end.
- You can combine this message, it should be one work:

`1h1m1s`
- You you can send yourself a message to the future:

`8h30m Wake UP!!!` or `1h Stop playing games.`

Jira-like time message should be always first


##Enjoy!
const { Telegraf } = require('telegraf');

// TOKEN BOT TELEGRAM
const bot = new Telegraf("5610884508:AAHdcjdwBckFWwE3LXznfH3GK1BjHpVTO8M");

// https://api.telegram.org/bot5610884508:AAHdcjdwBckFWwE3LXznfH3GK1BjHpVTO8M/getUpdates
bot.telegram.sendMessage(-1001601177231, 'Hello Telegram! Agora no grupo');



bot.start((ctx) => ctx.reply('Bem-vindo'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));



bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
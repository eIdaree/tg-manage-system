require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');
const webAppUrl = process.env.APIURL;
const token = process.env.TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === '/start') {
    await bot.sendMessage(chatId, 'Welcome to KazManageSystem', {
      reply_markup: {
        keyboard: [
          [{ text: 'Enter the system', web_app: { url: webAppUrl } }]
        ]
      }
    });

    await bot.sendMessage(chatId, 'Ниже появится кнопка заполни форму', {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Enter the system', web_app: { url: webAppUrl } }]
        ]
      }
    });
  }
});

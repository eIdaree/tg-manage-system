require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');
const webAppUrl = process.env.APPURL
const token = process.env.TOKEN;

const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text

  if(text === '/start'){
    await bot.sendMessage(chatId,'Здравствуйте в сервис KazManageSystem', {
        reply_markup:{
            keybord:[
                [{text: 'Заполни форму', web_app: {url: webAppUrl + '/form'}}]
            ]
        }
    })
    await bot.sendMessage(chatId,'Ниже появится кнопка заполни форму', {
        reply_markup:{
            inline_keyboard: [
                [{text: 'Сделать заказ', web_app: {url: webAppUrl}}]
            ]
        }
    })
  }

});
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


const express = require('express');

const app = express();
const port = 3001;

const cors = require('cors'); 

const axios = require('axios');
app.use(cors());


app.get('/api/workers', (req, res) => {
  const url = `https://def6768784d8e5a0.mokky.dev/workers`;
  axios.get(url)
    .then(response => {
      const data = response.data;
      res.json(data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Failed to retrieve data' });
    });
});

app.get('/api/users', (req, res) => {
  const url = `https://def6768784d8e5a0.mokky.dev/users/1`;
  axios.get(url)
    .then(response => {
      const data = response.data;
      res.json(data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Failed to retrieve data' });
    });
});

app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});
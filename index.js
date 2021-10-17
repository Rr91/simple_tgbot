var Bot = require('node-telegram-bot-api');
var os = require('os');
var token = "2070305632:AAHB3A3bOwrWN6nL7xILMNo1dyyBl6F7ItE";

var bot = new Bot(token, {polling: true});

bot.on('message', (msg) =>{
	bot.sendMessage(msg.chat.id, `Message from ${os.type()}, hello "${msg.from.first_name}"`);
});


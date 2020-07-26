const Discord = require('discord.js')
let client = new Discord.Client()

client.on('ready', () => {
    console.log('Bot started at\n', Date())
})

client.login(require('./token.json').token)
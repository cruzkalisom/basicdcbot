const Discord = require('discord.js')
const config = require('./config.json')
const dbvrp = require('../dbvrp')

const client = new Discord.Client({
    intents: Object.values(Discord.GatewayIntentBits)
});



client.on('messageCreate', (message) => {
    if(message.author.bot) return
    if(message.channel.type == 'dm') return

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    if(command === 'ping'){
        message.reply('Pong')
    }
})

client.login(config.token)
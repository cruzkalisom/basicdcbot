const Discord = require('discord.js')
const config = require('./misc/config.json')
const dbvrp = require('../dbvrp')

const client = new Discord.Client({
    intents: Object.values(Discord.GatewayIntentBits)
});

client.on("ready", () => {
    let activities = [
            `Bot Oficial de @!Pain`,
            `Feito para a Cidade Vumer RP`,
            `Economia, diversão e cooperação`,
            `Para ter o seu Bot Oficial entre em contato com a Staff.`,
            `Divirta-se!!!`
        ],
        i = 0;
    setInterval(() => client.user.setActivity(`${activities[i ++ % 
        activities.length]}`, {
        type: "WATCHING"
    }), 1000 * 10);

    console.log(`Bot Discord ${client.user.tag} Online`);
})

client.on('guildMemberAdd', (member) => {
    const embed = new Discord.EmbedBuilder()
    .setAuthor({
        name: member.user.tag,
        iconURL: member.user.avatarURL(),
    })
    .setTitle(`${member.user.tag} | Seja bem vindo (a)!`)
    .setDescription("Olá, seja bem-vindo(a) à CIDADE VUMER FIVEM!")
    .addFields(
        {
        name: ":wave: Sabia que:",
        value: "A Cidade Vumer é patrocinada pela Vumer Web Solutions.",
        inline: true
        },
        {
        name: ":shield: Tag do usuário",
        value: `${member.user.tag} (${member.user.id})`,
        inline: true
        },
        {
        name: ":name_badge: Precisando de ajuda?",
        value: "Caso você tenha alguma dúvida ou problema, chame a nossa equipe!",
        inline: true
        },
        {
        name: ":police_officer:  Evite punições!",
        value: "Leia as nossas ⁠<#939318031040008244> para evitar ser punido no servidor!",
        inline: false
        },
    )
    .setThumbnail(member.user.avatarURL())
    .setColor("#4500ad")
    .setFooter({
        text: "Bot Cidade Vumer",
    })
    .setTimestamp();

    var channel = client.channels.cache.get('978104135612264498')
    channel.send(`${member.user}`)
    channel.send({embeds: [embed]})
})

client.on('messageCreate', (message) => {
    if(message.author.bot) return
    if(message.channel.type == 'dm') return

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    if(command === 'ping'){
        message.reply('Pong')
    }
})

client.login('OTcwMTYyNDQ3MzY3NDM0MzQw.GKfanF.BvVDfGx_bfiXC7Hu9wn-bC2cbrS3J_klrF71Ok')
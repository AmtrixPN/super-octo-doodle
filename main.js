const Discord = require('discord.js')

const TOKEN = "OTQyMjM1MTY1MzYxNTc4MDY1.Yghi4Q.STldEVBuONECuivZVmdsnyrJIx0"

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

client.on('ready', () =>{
    console.log("Connected as " + client.user.tag)

    client.user.setActivity("Zane", {type: "WATCHING"})

    client.guilds.cache.forEach((guild) => {
        console.log(guild.name)
        guild.channels.cache.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
        })
    })

    let generalChannel = client.channels.cache.get("944295717005041674")
    generalChannel.send("Bot Online!")

})

client.on("messageCreate", (message) => {
    if (message.content == "Hello"){
        message.reply("Hello Person!")
    }
})

client.login(TOKEN)
const Discord = require("discord.js");

exports.run = (bot, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Infelizmente você não tem permissão!");
    message.delete()
    message.channel.send(args.join(' '))
}

exports.help = {
    name: "say"
}

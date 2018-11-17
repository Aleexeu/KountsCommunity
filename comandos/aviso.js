const Discord = require("discord.js");

exports.run = (bot,message,args) => {
        if(!message.guild.member(message.author.id).hasPermissions("BAN_MEMBERS")) return message.reply("Você não tem permissão de usar esse comando")
    message.delete();
    message.channel.send('@everyone | @here')
    let embed = new Discord.RichEmbed()
        .setTitle(`KountsCommunity | Aviso`)
        .setDescription(args.join(" "))
        .setColor('#07D03C')
        .setTimestamp("")
        .setFooter(`KountsCommunity | Todos os direitos reservados.`, bot.user.displayAvatarURL);

        message.channel.send(embed);
     }

exports.help = {
    name: "aviso"
}
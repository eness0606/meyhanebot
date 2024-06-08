const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {

    const yardım = new Discord.MessageEmbed()
        .setColor("#7289DA")
        .setAuthor("Göktürk Moderasyon", client.user.avatarURL())
        .setTitle("Göktürk Moderasyon Bot Yardım Menüsü")
        .setDescription("Göktürk Moderasyon, sunucunuz için çeşitli komutlar sunar. Aşağıdaki kategorilere göz atabilirsiniz:")
        .addField(":tada: Eğlence Komutları", "`.eğlence`", true)
        .addField(":hammer: Moderasyon Komutları", "`.moderasyon`", true)
        .addField(":bust_in_silhouette: Kullanıcı Komutları", "`.kullanıcı`", true)
        .addField(":art: Logo Komutları", "`.logo`", true)
        .setImage("https://i.hizliresim.com/t6vd9h1.gif")
        .setFooter("© Göktürk Community", client.user.avatarURL())
        .setTimestamp();

    message.channel.send(yardım);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["help", "y", "yardim"],
    permLevel: "Yetki gerekmiyor."
};

exports.help = {
    name: 'yardım',
    category: 'kullanıcı',
    description: 'Göktürk Moderasyon Bot Yardım Menüsü.',
    usage: '.yardım'
}

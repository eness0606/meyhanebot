const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (!message.channel.name.startsWith('ticket-')) return message.channel.send('Bu komutu sadece ticket kanallarında kullanabilirsiniz.');

    message.channel.delete();

    const embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Ticket Sistemi")
        .setDescription(`Ticket ${message.channel.name} kapatıldı.`)
        .setTimestamp();

    const logChannel = message.guild.channels.cache.find(ch => ch.name === 'ticket-logs'); // Değiştirin
    if (logChannel) logChannel.send(embed);
};

module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};

module.exports.help = {
    name: "ticket-close",
    description: "Bir ticket'i kapatır.",
    usage: "ticket-close"
};

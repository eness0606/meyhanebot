const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    const reason = args.join(" ") || "Belirtilmemiş";
    const ticketChannel = await message.guild.channels.create(`ticket-${message.author.username}`, {
        type: 'text',
        permissionOverwrites: [
            {
                id: message.guild.id,
                deny: ['VIEW_CHANNEL'],
            },
            {
                id: message.author.id,
                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
            },
            {
                id: 'your-staff-role-id-here', // Değiştirin
                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
            },
        ],
    });

    const embed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle("Ticket Sistemi")
        .setDescription(`Merhaba ${message.author}, ticket'in başarıyla oluşturuldu!`)
        .addField("Sebep", reason)
        .setTimestamp();

    ticketChannel.send(embed);
    message.channel.send(`Ticket oluşturuldu: ${ticketChannel}`).then(msg => msg.delete({ timeout: 10000 }));
};

module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

module.exports.help = {
    name: "ticket-create",
    description: "Yeni bir ticket oluşturur.",
    usage: "ticket-create [sebep]"
};

const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
    if (args[0] === "durum") {
        // Fivem sunucu durumunu kontrol etmek için
        let serverStatus = await checkServerStatus(); // Örneğin, bu fonksiyon sunucu durumunu kontrol eder

        const embed = new Discord.MessageEmbed()
            .setColor("ORANGE")
            .setAuthor("Göktürk Moderasyon", client.user.displayAvatarURL())
            .setTitle("Fivem Sunucu Durumu")
            .setDescription(serverStatus ? "Sunucu aktif, giriş sağlayabilirsiniz." : "Sunucu şu anda kapalı.")
            .addField("Sunucu IP Adresi", "172.168.1.1")
            .setImage("https://i.hizliresim.com/t2a2gk7.gif")
            .setFooter("© Göktürk Moderasyon Bot", client.user.displayAvatarURL())
            .setTimestamp();

        message.channel.send(embed);
    } else if (args[0] === "ip") {
        const embed = new Discord.MessageEmbed()
            .setColor("ORANGE")
            .setAuthor("Göktürk Moderasyon", client.user.displayAvatarURL())
            .setTitle("Sunucu IP Adresi")
            .setDescription("Fivem sunucunun IP adresi")
            .addField("Sunucu IP Adresi", "172.168.1.1")
            .setImage("https://i.hizliresim.com/t2a2gk7.gif")
            .setFooter("© Göktürk Moderasyon Bot", client.user.displayAvatarURL())
            .setTimestamp();

        message.channel.send(embed);
    } else {
        const embed = new Discord.MessageEmbed()
            .setColor("ORANGE")
            .setAuthor("Göktürk Moderasyon", client.user.displayAvatarURL())
            .setTitle("Sunucu Bakımda!")
            .setDescription("Sunucu bakımda, ikinci bir duyuruya kadar giriş sağlamayın.")
            .addField("Sunucu IP Adresi", "172.168.1.1")
            .setImage("https://i.hizliresim.com/t2a2gk7.gif")
            .setFooter("© Göktürk Moderasyon Bot", client.user.displayAvatarURL())
            .setTimestamp();
        message.channel.send("@everyone @here");
        message.channel.send(embed);
    }
};

async function checkServerStatus() {
    // Sunucu durumu kontrol eden bir asenkron fonksiyon
    // Burada sunucunun gerçek durumunu kontrol edecek kodları ekleyebilirsiniz.
    // Örneğin:
    // return true veya false olarak sunucu durumu dönebilirsiniz.
    return true; // Örnek olarak true döndürdüm, gerçek durumu kontrol etmelisiniz.
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["b", "bakim"],
    permLevel: "Yetki gerekmiyor."
};

exports.help = {
    name: 'bakim',
    category: 'Fivem',
    description: 'Fivem sunucunuzun bakımda olduğunu bildirir.',
    usage: 'g.bakim'
};

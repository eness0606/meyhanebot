const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("TR RP sürümüyle yeniden sizlerle.")
.setTitle(" TR RP Kullanıcı Komutları ")
 .setTimestamp()
.setDescription(" **.avatar** = Avatarınıza bakarsınız.  \n **.yetkilerim** = Yetkilerini görürsün.  \n  **.profil** = Profilini görürsün.  \n  **.sunucuresmi** = Sunucu resmini gösterir.  \n  **.ping** = Botun Pingine Bakarsın. \n  **.id** = Birisinin id'sine Bakarsın.  \n  **.davet** = Beni Sunucuna Ekle.  \n **.botbilgi** = Bot istatistiklerini görürsünüz.  \n  **.bug-bildir** = Yazdığınız bug'u yapımcılarıma bildirir. ")
.setImage("https://cdn.discordapp.com/attachments/905891830602821692/905894986237755422/Photo_1636052565621.jpg")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}
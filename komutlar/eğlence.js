const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Bad`s v12 sürümüyle yeniden sizlerle.")
.setTitle(" Bad`s Eğlence Komutları ")
 .setTimestamp()
.setDescription(" **.tersyazı** = Bir Yazıyı Bot Ters Yazar.  \n  **.mcskin** = Yazdığınız ismin minecraft görünüşünü atar.  \n  **.fbi** = Bot FBi Gif Atar.  \n  **.token** = Tokenimi Öğrenmek İstemezmisin?  \n  **.düello** = Düello Atarsın.  \n  **.wasted** = Polis tarafından yakalanırsın.  \n  **.atatürk** = Dene ve gör... (1881-1938) ")
.setImage("https://cdn.discordapp.com/attachments/905891830602821692/905894986237755422/Photo_1636052565621.jpg")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}
const Discord = require("discord.js"),
client = new Discord.Client();                
const config = require("../ayarlar.js")
const db = require('quick.db');
const { MessageEmbed } = require("discord.js");
module.exports.run = async (client, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**Bu komutu kullanmak için** `Mesajları Yönet` yetkisine sahip olmalısınız**");

  let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('RANDOM').setTimestamp();
  if(!args[0] || (args[0] && isNaN(args[0])) || Number(args[0]) < 1 || Number(args[0]) > 100) return message.channel.send(embed.setDescription("1-100 arasında silinecek mesaj miktarı belirtmelisin!")).then(x => x.delete({timeout: 5000}));
  await message.delete().catch();
  message.channel.bulkDelete(Number(args[0])).then(msjlar => message.channel.send(
   embed
  .setDescription(`Başarıyla **${msjlar.size}** adet mesaj silindi!`)
  .setThumbnail(config.gif)
  .setColor("GREEN")
  .setFooter(config.footer, config.gif)
  
  ).then(x => x.delete({timeout: 5000}))).catch()
};

exports.config = {
  name: "sil",
  guildOnly: true, 
  aliases: ["sil","temizle","clear"],
};
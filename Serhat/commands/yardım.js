const Discord = require("discord.js"),
client = new Discord.Client();                
const config = require("../ayarlar.js")
const db = require('quick.db');

module.exports.run = async (client, message, args) => {
  
  const yardım = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setAuthor("Serhat Yardım Menüsü")
  .setDescription(`
  :white_small_square: **=**  \`${config.prefix}ban\`: **Belirttiğiniz kişiyi sunucudan banlar**
  :white_small_square: **=**  \`${config.prefix}unban\`:  **Belirttiğiniz kişinin banını açar**
  :white_small_square: **=**  \`${config.prefix}kick\`:  **Belirttiğiniz kişiyi sunucudan kickler**
  :white_small_square: **=**  \`${config.prefix}duyuru\`:  **Duyuru Yaparsınız**
  :white_small_square: **=**  \`${config.prefix}sil\`:  **Belirttiğiniz sayıda mesajı siler**
  :white_small_square: **=**  \`${config.prefix}düello\`:  **Belirttiğiniz kişi ile düello atarsınız**
  :white_small_square: **=**  \`${config.prefix}vur\`:  **Gücünüzü test edersiniz**
  :white_small_square: **=**  \`Ban komut rolü\`: <@&${config.bankomut}>
  
  `)
  .setImage(config.gif)
  .setThumbnail(message.author.avatarURL())
  message.channel.send(yardım)

};

exports.config = {
  name: "yardım",  
  guildOnly: false, 
  aliases: ["yardım","help"], 
};
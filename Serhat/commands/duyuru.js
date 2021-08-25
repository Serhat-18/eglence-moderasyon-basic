const Discord = require("discord.js"),
client = new Discord.Client();    
const { MessageEmbed } = require('discord.js'); 
const config = require("../ayarlar.js")

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**Bu komutu kullanmak için** `Mesajları Yönet` yetkisine sahip olmalısınız**");
let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Lütfen Duyuru Metnini Giriniz.');
message.delete();
message.channel.send( new Discord.MessageEmbed()
.setTitle("Duyuru")
.setThumbnail(config.gif)
.setDescription(mesaj)
.setColor(config.mavi)
.setFooter(config.footer))
message.channel.send.send("@everyone").then(x => x.delete({timeout: 10}))

};

exports.config = {
  name: "duyuru",  
  guildOnly: false, 
  aliases: ["duyuru","duyuru"], 
};
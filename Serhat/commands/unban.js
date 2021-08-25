const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js'); 
client = new Discord.Client();                
const config = require("../ayarlar.js");

module.exports.run = async (client, message, args) => {


  if(!message.member.roles.cache.has(config.bankomut)) return message.channel.send(new MessageEmbed()
  .setTitle(`Hata`)
  .setColor(config.kirmizi)
  .setDescription(`<@&${config.bankomut}> Rolüne sahip değilsin :x:`)
  .setFooter(config.footer))

  let member = args[0]
  let guild = message.guild;
  let kanal = config.unbanlog
  
  if(!member) return message.channel.send("Bir İd Gırmelısın")
  
  
  
  
  guild.members.unban(member)


  message.channel.send("**üye banı başarıyla kaldırıldı**")
  
  const ban = new Discord.MessageEmbed()
  .setThumbnail(message.author.avatarURL())
  .setColor('RANDOM')
  .addField(`Banı kaldırılan Kullanıcı`,`<@${member}>`)
  .addField(`Banı kaldırılan Kullanıcı id`,member) 
  .addField(`Yetkili`,message.author)
  .setImage(config.bangif)
  .setFooter(config.footer)
  client.channels.cache.get(kanal).send(ban)

};

exports.config = {
  name: "unban",  
  guildOnly: false, 
  aliases: ["unban"], 
};
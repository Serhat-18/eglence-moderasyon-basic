const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js'); 
const config = require("../ayarlar.js");
exports.run = (client, message, args) => {

  if(!message.member.roles.cache.has(config.bankomut)) return message.channel.send(new MessageEmbed()
  .setTitle(`Hata`)
  .setColor(config.kirmizi)
  .setDescription(`<@&${config.bankomut}> Rolüne sahip değilsin :x:`)
  .setFooter(config.footer))

let member = args[0];
let sebep = args.slice(1).join(" ")
let guild = message.guild;
let kanal = config.banlog

if(!member) return message.channel.send("Bir Üye Etıketle")

if(!sebep) return message.channel.send("Bir Sebep Gir")
guild.members.ban(member, { reason: `${sebep}` })
    
  message.channel.send("**üye başarıyla banlandı**")
const ban = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL())
.setColor('RANDOM')
.addField(`Banlanan Kullanıcı`,`<@${member}>`)
.addField(`Banlanan Kullanıcı id`,member)
.addField(`Yetkili`,message.author)
.addField(`Sebep`,sebep)
.setImage(config.bangif)
.setFooter(config.footer)
client.channels.cache.get(kanal).send(ban)

};

exports.config = {
  name: "ban",  
  guildOnly: false, 
  aliases: ["ban"], 
};
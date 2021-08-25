
const Discord = require("discord.js"),
client = new Discord.Client();                
const config = require("../ayarlar.js")

module.exports.run = async (client, message, args) => {
		message.channel.send('Hemen Diyorum Abi 1 Saniye..').then(message => {
			var rastgeleler = [':boxing_glove: **Ha Ha skorun:** 0' ,
		 
			':boxing_glove: **Ha Ha skorun:** 1' ,
			':boxing_glove: **Ha Ha skorun:** 2' ,
			':boxing_glove: **Ha Ha skorun:** 3' ,
			':boxing_glove: **Ha Ha skorun:** 4' ,
			':boxing_glove: **Ha Ha skorun:** 5' ,
			':boxing_glove: **Ha Ha skorun:** 6' ,
			':boxing_glove: **Ha Ha skorun:** 7' ,
			':boxing_glove: **Ha Ha skorun:** 8' ,
			':boxing_glove: **Ha Ha skorun:** 9' ,
			':boxing_glove: **İdare eder skorun:** 10' ,
			':boxing_glove: **İdare eder skorun:** 11' ,
			':boxing_glove: **İdare eder skorun skorun:** 12' ,
			':boxing_glove: **İdare eder skorun:** 13' ,
			':boxing_glove: **İdare eder skorun:** 14' ,
			':boxing_glove: **İdare eder skorun skorun:** 15' ,
			':boxing_glove: **İdare eder skorun:** 16' ,
			':boxing_glove: **İdare eder skorun:** 17' ,
			':boxing_glove: **İdare eder skorun skorun:** 18' ,
			':boxing_glove: **İdare eder skorun:** 19' ,
			':boxing_glove: **İdare eder skorun:** 20' ,
			':boxing_glove: **Bravo skorun:** 21' ,
			':boxing_glove: **Bravo skorun:** 22' ,
			':boxing_glove: **Bravo skorun:** 23' ,
			':boxing_glove: **Bravo skorun:** 24' ,
			':boxing_glove: **Bravo skorun:** 25' ,
			':boxing_glove: **Bravo skorun:** 26' ,
			':boxing_glove: **Bravo skorun:** 27' ,
			':boxing_glove: **Bravo skorun:** 28' ,
			':boxing_glove: **Bravo skorun:** 29' ,
			':boxing_glove: **Bravo skorun:** 20' ,
			':boxing_glove: **Bravo skorun:** 31 sjsjsjsj' ,
			':boxing_glove: **Bravo skorun:** 32' ,
			':boxing_glove: **Bravo skorun:** 33' ,
			':boxing_glove: **Bravo skorun:** 34' ,
			':boxing_glove: **Bravo skorun:** 35' ,
			':boxing_glove: **Bravo skorun:** 36' ,
			':boxing_glove: **Bravo skorun:** 37' ,
			':boxing_glove: **Bravo skorun:** 38' ,
			':boxing_glove: **Bravo skorun:** 39' ,
			':boxing_glove: **Bravo skorun:** 40' ,
			':boxing_glove: **Bravo skorun:** 41' ,
			':boxing_glove: **Bravo skorun:** 42' ,
			':boxing_glove: **Bravo skorun:** 43' ,
			':boxing_glove: **Bravo skorun:** 44' ,
			':boxing_glove: **Bravo skorun:** 45' ,
			':boxing_glove: **Ohaa Yavaşş skorun:** 46' ,
			':boxing_glove: **Ohaa Yavaşş  skorun:** 47' ,
			':boxing_glove: **Ohaa Yavaşş  skorun:** 48' ,
			':boxing_glove: **Ohaa Yavaşş  skorun:** 49' ,
			':boxing_glove: **Ohaa Yavaşş  skorun:** 50' ,
		   ];
			   var serhataberastgele = rastgeleler[Math.floor(Math.random() * rastgeleler.length)];
					 message.edit(`${serhataberastgele}`);
		  });

		};

		  exports.config = {
			name: "vur",  
			guildOnly: false, 
			aliases: ["boks","vur"], 
		  };
//fiber botlist'den MustafaBey tarafından yapılmıştır
const Discord = require('discord.js')

var gif = ['https://cdn.discordapp.com/attachments/762279901465542677/781119090705170452/TestyPhysicalJumpingbean-max-1mb.gif'] /// içine ekleyebilirsiniz istediğiniz kadar
 exports.run = function(client, message, args) {

let gifler = gif[Math.floor(Math.random() * gif.length)]
message.channel.send(
  new Discord.RichEmbed()
 .setColor(message.guild.me.displayColor)
   .setTitle('Reis Seni Şamarladı :D')
     .setImage(gifler)

  .setFooter('NMN Bot List &amp; Code Tokat At')
   .setTimestamp()

  )

}
////Fiber Botlist &amp; Code
exports.conf = {

  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0

};

exports.help = {

  name: 'tokatat',
  description: 'Reis Birini Şamarlar',
  usage: 'tokatat'

}
//fiber botlist'den MustafaBey tarafından yapılmıştır
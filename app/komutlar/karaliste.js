const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
const Discord = require('discord.js')
exports.run = async(client, message, args) => {
 if(message.author.id !== ayarlar.sahip)return message.channel.send('Bu komutu Kullanamazsın')
  let kullanıcı = client.users.get(args[1]) || message.mentions.members.first();
let sebep = args.slice(1).join(" ");
  if(!kullanıcı) return message.channel.send(`Karalisteye kimi alıcaksın?`)
if(!sebep) return message.channel.send(`Sebep belirtmelisin.`)
  let kullanıcı2 = client.users.get(kullanıcı.id)
  if(db.has(`sebep_${kullanıcı.id}`)) return message.channel.send(`Bu kişi zaten karalistede bulunuyor.`)
  db.set(`sebep_${kullanıcı.id}`, sebep)
  kullanıcı.removeRole(`763488568903467018`)
  message.channel.send(new Discord.RichEmbed()
                      .setTitle(`Başarılı ✅`)
                      .setDescription(`${kullanıcı} adlı kişi karalisteye alındı.\nSebep: ${sebep}`)
                      .setColor(message.guild.me.displayColor))
  kullanıcı2.send(new Discord.RichEmbed()

                      .setTitle(`❗DİKKAT❗`)
                      .setDescription(`**${message.guild.name}** sunucusunda karalisteye alındın.\nSebep: ${sebep}`)
                      .setColor('#FF0000'))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kara-liste'],
  permLevel: 0
};

exports.help = {
  name: 'karaliste',
  description: 'JavaScript kanallarına erişim sağlar.',
  usage: 'js'
};
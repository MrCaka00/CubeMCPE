const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
exports.run = (client, message, args) => {
var prefix = ayarlar.prefix
 message.channel.send(new Discord.RichEmbed()
.setTitle(`Yardım Menüsü`)
.setDescription(`
• ${prefix}Küfür Engel : Küfürleri engellersiniz işte xD . ||c/küfür-engel aç/kapa ||
• ${prefix}Gelen Giden : Gelen Giden kanalı ayarlarsınız . ||c/gelen-giden ayarla <#kanal>||
• ${prefix}Çekiliş : Çekiliş başlatır ||c/çekiliş (sonraki mesaj) <kanalınn adı> <süre> <ödül>||
• ${prefix}Nick : Etiketlenen kişinin nick'ini değiştirir. ||c/nick <@kişi> <yeni nick>||
• ${prefix}Nuke : Kanalı tamamen temizler. ||c/nuke||
• ${prefix}Otorol : Sunucuya yeni giren kişiye otomatik verilcek komutu belirler. ||c/otorol ayarla <@rol> <#kanal> ||
• ${prefix}Ping : Botun ping'ini gösterir. ||c/ping||
• ${prefix}Reklam Engel : Sonu .net , .com , .cf v.s. ve Başında https: , www. v.s. olan linkleri engeller ||c/reklam-engel aç||
• ${prefix}Sesli Sustur : Seslideki bir kişinin mikrafonunu kapatırsınız. ||c/ses-sustur <@kişi>||  
• ${prefix}Sil : Sohbetteki mesajlardan seçtiğiniz kadarını siler. ||c/sil <sayı>||
`)//// Kendinize göre komutları arttırabilirsiniz
.setColor("RANDOM")
.setFooter(`Tüm Hakları Saklıdır.`))

//// Basit Yardım Menusu İstek Üzerine Yapılmıştır
 
  

}



exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['help'],
  permLevel: 0
}

exports.help = {
  name: 'moderasyon',
  description: 'Botu yeniden başlatır.',
  usage: 'moderasyon'
};
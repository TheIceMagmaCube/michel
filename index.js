const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = require('./index.json');
const token = process.env.token;
const prefix = ("//");

bot.on('ready', function () {
    console.log("Je suis prêt et opérationnel.")
    bot.user.setActivity("niquer la mère de celui qui lira !").catch(console.error)
    
})

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send("Bienvenue sur le serveur de test du Studio Digido, ce serveur est un test !\n\nVous restez à vos risques et périls " + member.displayName + " !")
        console.log(`${member.displayName} à rejoint le serveur.`)
    }).catch(console.error)

})

bot.on('message', message => {
  
    if (message.content === '//join') {
      // Only try to join the sender's voice channel if they are in one themselves
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => { // Connection is an instance of VoiceConnection
            message.reply('Je suis connecté dans votre channel !');
          })
          .catch(console.log);
      } else {
        message.reply('Les samouraïs de Discord se sont perdus en route !\n\n Essayez de changer de salon vocal');
      }
    }
  });


bot.login(token);

const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = require('./index.json');
const prefix = ("//");

bot.on('ready', function () {
    console.log("Je suis prêt et opérationnel.")
    bot.user.setActivity("regarder comment défoncer le serveur").catch(console.error)
    
})

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send("Bienvenue sur le serveur de test du Studio Digido, ce serveur est un test !\n\nVous restez à vos risques et périls " + member.displayName + " !")
        console.log(`${member.displayName} à rejoint le serveur.`)
    }).catch(console.error)

})

bot.login(token);

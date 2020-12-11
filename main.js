const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = 'IGN.';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.on("ready", async () => {
    console.log("Activity is online!");
    client.user.setActivity(`Trying not to shit myself`, {
       url: "http://twitch.tv/notxernosz",
        type: "PLAYING"
         
    });
});


client.once('ready', () => {
    //763837839036121100
    setInterval(() => {
        var testChannel = client.channels.cache.get('763837839036121100');
        testChannel.send('<@465737829348147200> do !d bump');
      }, "7.2e+6");

    console.log('IGNPD Bot is online!');   

    
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
if(command === 'test'){
    client.commands.get('ping').execute(message, args);
}else if(command === 'clear'){
    client.commands.get('clear').execute(message, args);
}else if(command === 'kick'){
    client.commands.get('kick').execute(client, message, args);
}else if(command === 'ban'){
    client.commands.get('ban').execute(message, args);
}
     
});
client.login('my client id bruh');
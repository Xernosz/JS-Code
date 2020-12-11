module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args){
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You do not have permission to use this command.')     
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("User has been kicked");
        }else{
            message.channel.send(`You coudn't kick that member!`);
        }
    }
} 

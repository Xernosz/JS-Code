module.exports = {
    name: 'clear',
    description: "Clear messages!",
   async  execute(message, args) {
        if (!args[0]) return message.reply("Please repeat that command but with how many messages you want to clear!");
 
        if(isNaN(args[0])) return message.reply("Re-Enter the command with a real number!");
 
        if(args[0] > 100) return message.reply("You have to give me a number ≤ 100!");
        
        if(args[0] < 1) return message.reply("You have to give me a number ≥ 1!");
 
        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
    });
 
 }
}   
var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');




// configure logger
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, { colorize: true });
logger.level = 'debug';

// init bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as:');
    logger.info(bot.username + '-(' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // parse and run depending on input
    if (message.slice(-1) == '*') {
        var args = message.substring(0, message.length - 1);
        var cmd = args[0];
        logger.info("args:" + args);

        // remove arg, but we really just care about everything before
        // when we get to move complex sentance corrections, we can split 
        // the args and call the py code more 
        // args = args.splice(1);
        switch (cmd) {
            case "*":
                bot.sendMessage({
                    to: channelID,
                    message: 'Hi, Im online!\nTo use me, add an * to the end of the word you want to correct from a previous message'
                    
                });
                break;
        }
    }
});
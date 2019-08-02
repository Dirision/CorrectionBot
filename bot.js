var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');


// configure logger
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, { colorize: true });
logger.level = 'debug';

// returns the second last message from userID from a list of messages
function getSecondLastMessage(userID, messages) {
    logger.info("Received the last 20 Messages-------------------------------------------")
    var flag = false;
    var msgID = "";
    var msg = "";
    for (var i in messages) {
        logger.info("Currently looking at msg:  " + messages[i]['content'] + "::::" + messages[i]['id']);
        id = messages[i]['author']['id'];
        if (id == userID) {
            if (flag == false)
                flag = true;
            else if (flag) {
                msgID = messages[i]['id'];
                msg = messages[i]['content'];
                break;
            }
        }

        // if(messages[i]['user']['id'])
    }    
    if (flag == false || (flag == true && msgID == "")) {
        throw "No previous messages found";
    }

    return [msg,msgID];
    
}
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

bot.on('message', function (user, userID, chanID, message, evt) {
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
                    to: chanID,
                    message: 'Hi, Im online!\nTo use me, add an * to the end of the word you want to correct from a previous message'
                    
                });
                break;
            default:
                bot.sendMessage({
                    to: chanID,
                    message: 'Received message: ' + args + " from: " + userID + " - Looking for previous message"

                });
                // pull message array 
                messages = bot.getMessages({
                    channelID: chanID,
                    limit: 20
                    // Handle getting a list of messages in the response obgect
                }, function (error, response) {
                    var lastMsg = [];
                    try {
                        lastMsg = getSecondLastMessage(userID, response);
                    } catch (err) {
                        bot.sendMessage({
                            to: chanID,
                            message: 'ERROR: ' + err 
                        });
                    } 
                    logger.info("LAST MESSAGE:    " + lastMsg);
                    bot.sendMessage({
                        to: chanID,
                        message: 'Second last message: ' + lastMsg[0] + "- msgID: " + lastMsg[1]
                    }); 
                    
                });
                // logger.info("Last 20 messages: " + messages);
                
                break;
        }
    }
});


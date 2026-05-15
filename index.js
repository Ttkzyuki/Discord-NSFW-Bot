const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { logError, logInfo } = require('./utils/logger');
const eventHandler = require('./handler/events');

// Initialize Discord Client
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
    ],
});

client.commands = new Collection();

// Execute the event handler logic to bind events
logInfo('Initializing handlers...');
eventHandler(client);

// Login
if (!process.env.MTUwNDcyMjYyNTQzODQxNjkwNg.G0Hq5s.49fMdArLMgnV0K2HgqXw9JBol9WoJXAT20W8Lk || !process.env.CLIENT_ID) {
    logError('Missing BOT_TOKEN or CLIENT_ID environment variables.');
    process.exit(1);
}

client.login(process.env.BOT_TOKEN).catch(err => {
    logError(`Login failed: ${err.message}`);
});

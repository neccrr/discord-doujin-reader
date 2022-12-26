const { Client, Partials, Collection, GatewayIntentBits } = require('discord.js');
const config = require('./config/config');
const colors = require("colors");

// Creating a new client:
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent
  ],
  partials: [
    Partials.Channel,
    Partials.Message,
    Partials.User,
    Partials.GuildMember,
    Partials.Reaction
  ],
  presence: {
    activities: [{
      name: "Your Mom",
      type: 3
    }],
    status: 'dnd'
  }
});

// Host the bot: (For replit)
// require('http').createServer((req, res) => res.end('Ready.')).listen(3000);

// Getting the bot token:
const AuthenticationToken = process.env.TOKEN || config.Client.TOKEN;
if (!AuthenticationToken) {
  console.warn("[ERROR] Authentication Token for Discord bot is required! Use Envrionment Secrets or config.js.".red)
  return process.exit();
}

// Handler:
client.ApplicationCommandHandler = new Collection();
client.EventHandler = new Collection();
client.CrashHandler = new Collection();

module.exports = client;

["ApplicationCommandHandler", "EventHandler", "CrashHandler"].forEach((file) => {
  require(`./handler/${file}`)(client, config);
});

// Login to the bot:
client.login(AuthenticationToken)
  .catch((err) => {
    console.error("[ERROR] Something went wrong while connecting to your bot...".red);
    console.error("[ERROR] Error from Discord API:" + err.red);
    return process.exit();
  });

if (config.Debug) {
    client.on('debug', console.log);
}
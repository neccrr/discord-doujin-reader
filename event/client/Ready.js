const client = require("../../DoujinReader");
const { Events } = require('discord.js');

module.exports = {
    name: "Ready.js"
};

client.once(Events.ClientReady, async () => {
    console.log("\n" + `[INFO] ${client.user.tag} is up and ready to go.`.brightGreen);
})
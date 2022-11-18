const client = require("../../index");
const { Events } = require('discord.js');

module.exports = {
    name: "onReady.js"
};

client.once(Events.ClientReady, async () => {
    console.log("\n" + `[INFO] ${client.user.tag} is up and ready to go.`.brightGreen);
})
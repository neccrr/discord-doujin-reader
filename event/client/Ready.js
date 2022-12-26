const client = require("../../index");

module.exports = {
    name: "Ready.js"
};

client.once('ready', async () => {
    console.log("\n" + `[INFO] ${client.user.tag} is up and ready to go.`.brightGreen);
})
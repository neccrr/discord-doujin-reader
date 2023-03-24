const { EmbedBuilder } = require("discord.js");
const client = require("../../index");
const config = require("../../config/config.js");

module.exports = {
    name: "InteractionCreate"
};

client.on('interactionCreate', async (interaction) => {
    if (interaction.isChatInputCommand()) {
        const command = client.ApplicationCommandHandler.get(interaction.commandName);

        if (!command) return;

        try {
            command.run(client, interaction, config);
        } catch (e) {
            console.error(e)
        }
    }
});


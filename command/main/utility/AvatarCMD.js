const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "avatar",
    description: "View your's or other's avatar image",
    type: 1,
    aliases: ["av", "pfp"],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
    run: async (client, interaction) => {

        const user = interaction

        // Finals:
        return interaction.reply(
            {
                embeds: [
                    new EmbedBuilder()
                        .setTitle(`${user.user.tag}'s avatar:`)
                        .setImage(user.displayAvatarURL(
                            {
                                dynamic: true
                            }
                        ))
                ],
            }
        );

    },
};

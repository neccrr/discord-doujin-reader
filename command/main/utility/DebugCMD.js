const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "debug",
    description: "Debug command.",
    type: 1,
    options: [
        {
            name: "crash",
            description: "Trigger specific error to crash the system.",
            type: 1,
            options: [
                {
                    name: "type",
                    description: "The type of error you want to trigger.",
                    required: true,
                    type: 3,
                    choices: [
                        {
                            name: "ReferenceError",
                            description: "Trigger undefinedVariable error.",
                            value: "ReferenceError"
                        },
                        {
                            name: "TypeError",
                            description: "Trigger TypeError error.",
                            value: "TypeError"
                        },
                        {
                            name: "RangeError",
                            description: "Trigger RangeError error.",
                            value: "RangeError"
                        }
                    ]
                }
            ],
        },
        {
            name: "test",
            description: "e",
            type: 1,
        }
    ],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
    run: async (client, interaction, config) => {
        const subCommand = interaction.options.getSubcommand();
        const successEmbed = new EmbedBuilder()
                    .setDescription(`✅ | **Triggered the error. Check the crash report to see the result.**`)
                    .setColor("Red");

        if (!config.Users.OWNERS.includes(interaction.user.id)) {
            return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription(`❌ | **Sorry but only developers can use this command!**`)
                    .setColor("Red")
                ],
                ephemeral: true
            })
        }

        if (subCommand === "crash") {
            switch (interaction.options.get("type").value) {
                case "ReferenceError":
                    interaction.reply({ embeds: [successEmbed], ephemeral: true });

                    // Ignore the errors
                    console.log(undefinedVariable);
                    break;
                case "TypeError":
                    interaction.reply({ embeds: [successEmbed], ephemeral: true });

                    console.log(interaction.orang.hitam);
                    break;
                case "RangeError":
                    interaction.reply({ embeds: [successEmbed], ephemeral: true });

                    let arr = new Array(-1);
                    console.log(arr);
                    break;
            }
        }
    }};

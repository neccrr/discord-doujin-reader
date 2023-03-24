const { EmbedBuilder } = require("discord.js");
const { API, TagTypes, } = require('nhentai-api');

module.exports = {
    name: "doujin",
    description: "Doujin command.",
    type: 1,
    options: [
        {
            name: "info",
            description: "Get information about doujin.",
            type: 1,
            options: [
                {
                    name: "code",
                    description: "The doujin code.",
                    type: 4,
                    required: true
                }
            ]
        },
        {
            name: "read",
            description: "Read doujin.",
            type: 1,
            options: [
                {
                    name: "code",
                    description: "The doujin code.",
                    type: 4,
                    required: true
                }
            ]
        },
    ],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
    run: async (client, interaction) => {
        const nhentaiAPI = new API();

        const subCommand = interaction.options.getSubcommand();

        if (subCommand === "info") {
            const sauce = interaction.options.get("code").value;

            nhentaiAPI.getBook(sauce).then(book => {
                return interaction.reply({
                    embeds: [
                        new EmbedBuilder()
                        .setTitle(`${book.title.english} | ${book.title.japanese}`)
                        .setDescription(`Artists: ${book.artists.toNames().join(', ')}`)
                        .addFields(
                                {
                                    name: "Tags",
                                    value: book.tags.toNames().join(', '),
                                },
                                {
                                    name: "Languages",
                                    value: book.languages,
                                    inline: true
                                },
                                {
                                    name: "Pages",
                                    value: book.pages.length,
                                    inline: true
                                },
                                {
                                    name: "Categories",
                                    value: book.categories,
                                    inline: true
                                }
                        )
                        .setImage(nhentaiAPI.getImageURL(book.cover))
                        .setColor("Random")
                        .setTimestamp()
                    ],
                })
            });
        }
    }};

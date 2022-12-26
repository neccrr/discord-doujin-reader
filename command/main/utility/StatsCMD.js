const { EmbedBuilder } = require("discord.js");
const cpuStat = require("cpu-stat");
const moment = require("moment");
require("moment-duration-format");

module.exports = {
    name: "stats",
    description: "Send bot's stats to user.",
    type: 1,
    options: [],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
    run: async (client, interaction) => {
        cpuStat.usagePercent(async function (err) {
            if (err) {
                return console.log(err);
            }
            const duration = moment.duration(client.uptime).format(" D[d], H[h], m[m]");

            return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`Stats from \`${client.user.username}\``)

                    .addFields({
                        name: ':ping_pong: Ping',
                        value: `┕\`${Math.round(client.ws.ping)}ms\``,
                        inline: true
                    },
                               {
                                   name: ':clock1: Uptime',
                                   value: `┕\`${duration}\``,
                                   inline: true
                               },{
                        name: ':file_cabinet: Memory',
                        value: `┕\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}mb\``,
                        inline: true
                    })

                    .addFields({
                        name: ':homes: Servers',
                        value: `┕\`${client.guilds.cache.size}\``,
                        inline: true
                    },
                               {
                                   name: ':busts_in_silhouette: Users',
                                   value: `┕\`${client.users.cache.size}\``,
                                   inline: true
                               },{
                        name: ':control_knobs: API Latency',
                        value: `┕\`${(client.ws.ping)}ms\``,
                        inline: true
                    })

                    .addFields({
                        name: ':robot: Version',
                        value: `┕\`v${require("../../../package.json").version}\``,
                        inline: true
                    },{
                        name: ':blue_book: Discord.js',
                        value: `┕\`v${require("../../../package.json").dependencies["discord.js"]}\``,
                        inline: true
                    },{
                        name: ':green_book: Node',
                        value: `┕\`${process.version}\``,
                        inline: true
                    })

                    .setColor('Random')
                ],
            })
        })}
    };

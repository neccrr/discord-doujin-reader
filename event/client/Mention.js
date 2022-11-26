const { EmbedBuilder, Events } = require("discord.js");
const client = require("../../DoujinReader");

module.exports = {
    name: "Mention.js"
};

client.on(Events.MessageCreate, async (message) => {
    const slashCMDLink = `[here](https://support-dev.discord.com/hc/en-us/articles/4404772028055-Message-Content-Privileged-Intent-FAQ#:~:text=MESSAGE%20CONTENT%20IS%20BECOMING%20A,in%2075%20or%20more%20servers)`
    const inviteLink = `[Try reinviting ${client.user.username}](https://discord.com/api/oauth2/authorize?client_id=1043008589201149982&permissions=8&scope=bot%20applications.commands)`
    const supportServerLink = `[${client.user.username}'s Support Server](https://discord.gg/zPXhzWhWpf)`

    if (message.content.includes("@here") || message.content.includes("@everyone") || message.type.toString() === "REPLY") return;

    if (message.mentions.has(client.user.id) && !message.author.bot) {
        return message.reply(
                {
                    embeds: [
                        new EmbedBuilder()
                        .setTitle(`**${client.user.username} has recently switched to slash commands!**`)

                        .setDescription(`**All** commands can be found by using \`/\` \n⠀\n**Why?** Discord is removing the message intent for Discord Bots. You can learn more about it ${slashCMDLink}. \n⠀\n**No Slash Commands?** ${inviteLink} or double checking your \`use application commands permission\`. \n \n**Need Help?** Join the ${supportServerLink}!`)

                        .setColor('Random')
                    ],

                    allowedMentions: {
                        repliedUser: false
                    }
                }
                );
    }

});
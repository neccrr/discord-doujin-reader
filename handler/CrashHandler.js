const { WebhookClient, EmbedBuilder } = require('discord.js');

module.exports = (client) => {
    let webhook = new WebhookClient({ id: '1056512955316969512', token: 'gdLg5FyNsm6cWdhG8Y2pTLyS4NPnNUt1rXpsteUd80rf093ST6glU5A-KuNUYfqpl6Lv' });

    process.on('unhandledRejection', async (err, promise) => {
        console.error(`[ANTI-CRASH] Error detected. Preventing it from crashing the system.`.red);
        console.error(promise);
        console.error(`[ANTI-CRASH] Unhandled Rejection: ${err}`.red);

        webhook.send({
            content: '<@715165927762559038>',
            username: 'Crash Reporter',
            avatarURL: 'https://cdn.discordapp.com/attachments/812146714105610250/1056781964520210462/Screenshot_20221221_194855_Instagram.png',
            embeds: [
                new EmbedBuilder()
                .setTitle(`Crash Report - 0x${Date.now().toString().slice(0, 7)}${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`)
                .setColor('Red')
                .setDescription(`${err.stack}`)
            ]
        });
    });

    /* idk
    async function postData(url = '', data = {}) {
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'key': ''
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });

        return response.json();
    }
    */
}
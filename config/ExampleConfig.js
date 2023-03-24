module.exports = {

    Prefix: process.env.BOT_PREFIX_ENV, // YOUR BOT PREFIX.

    Users: {
        OWNERS: process.env.BOT_OWNERS_ENV.split(' ') // THE BOT OWNERS ID.
    },

    Client: {
        TOKEN: process.env.BOT_TOKEN_ENV, // YOUR BOT TOKEN. (USE THIS ONLY IN VSCODE)
        ID: process.env.BOT_ID_ENV // YOUR BOT ID.
    }

}

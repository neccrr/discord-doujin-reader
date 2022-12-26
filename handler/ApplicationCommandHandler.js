const { PermissionsBitField, Routes, REST } = require('discord.js');
const fs = require("fs");
const colors = require("colors");

module.exports = (client, config) => {
    console.log("=================[ APPLICATION COMMAND HANDLER ]================".blue);

  let commands = [];

  // Slash commands handler:
  fs.readdirSync('./command/main/').forEach((dir) => {
    console.log('[HANDLER] Starting loading slash commands...'.yellow);
    const SlashCommands = fs.readdirSync(`./command/main/${dir}`).filter((file) => file.endsWith('.js'));

    for (let file of SlashCommands) {
      let pull = require(`../command/main/${dir}/${file}`);

      if (pull.name, pull.description, pull.type == 1) {
        client.ApplicationCommandHandler.set(pull.name, pull);
        console.log(`[HANDLER - SLASH] Loaded a file: ${pull.name} (#${client.ApplicationCommandHandler.size})`.brightGreen);

        commands.push({
          name: pull.name,
          description: pull.description,
          type: pull.type || 1,
          options: pull.options ? pull.options : null,
          default_permission: pull.permissions.DEFAULT_PERMISSIONS ? pull.permissions.DEFAULT_PERMISSIONS : null,
          default_member_permissions: pull.permissions.DEFAULT_MEMBER_PERMISSIONS ? PermissionsBitField.resolve(pull.permissions.DEFAULT_MEMBER_PERMISSIONS).toString() : null
        });

      } else {
        console.log(`[HANDLER - SLASH] Couldn't load the file ${file}, missing module name value, description, or type isn't 1.`.red)
      }
    }
  });

  // Registering all the application commands:
  if (!config.Client.ID) {
    console.log("[CRASH] You need to provide your bot ID in Config.js!".red + "\n");
    return process.exit();
  }

  const rest = new REST({ version: '10' }).setToken(config.Client.TOKEN || process.env.TOKEN);

  (async () => {
    console.log('[HANDLER] Starting registering all the application commands.'.yellow);

    try {
      await rest.put(
        Routes.applicationCommands(config.Client.ID),
        { body: commands }
      );

      console.log('[HANDLER] Successfully registered all the application commands.'.yellow);
    } catch (err) {
      console.log(err);
    }
  })();

  console.log("=================[ APPLICATION COMMAND HANDLER ]================".blue);
};

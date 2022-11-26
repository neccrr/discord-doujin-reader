const fs = require("fs");

module.exports = (client) => {
    console.log("=======================[ PREFIX HANDLER ]=======================".blue);

    fs.readdirSync('./command/deprecated/prefix/').forEach(dir => {
      const commands = fs.readdirSync(`./command/deprecated/prefix/${dir}`).filter(file => file.endsWith('.js'));
      for (let file of commands) {

        let pull = require(`../command/deprecated/prefix/${dir}/${file}`);
        if (pull.config.name) {
            client.prefix_commands.set(pull.config.name, pull);
            console.log(`[HANDLER - PREFIX] Loaded a file: ${pull.config.name} (#${client.prefix_commands.size})`.brightGreen)
        } else {
            console.log(`[HANDLER - PREFIX] Couldn't load the file ${file}, missing module name value.`.red)
        }

      }
  });

  console.log("=======================[ PREFIX HANDLER ]=======================".blue);
};

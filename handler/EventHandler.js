const fs = require("fs");
const colors = require("colors");

module.exports = (client) => {
    console.log("=======================[ EVENTS HANDLER ]=======================".blue);

  fs.readdirSync('./event/').forEach(dir => {
		const commands = fs.readdirSync(`./event/${dir}`).filter(file => file.endsWith('.js'));
		for (let file of commands) {

			let pull = require(`../event/${dir}/${file}`);
			if (pull.name) {
				client.EventHandler.set(pull.name, pull);
				console.log(`[HANDLER - EVENTS] Loaded a file: ${pull.name}`.brightGreen)
			} else {
				console.log(`[HANDLER - EVENTS] Couldn't load the file ${file}. missing name or aliases.`.red)
			}

		}
	});

  console.log("=======================[ EVENTS HANDLER ]=======================".blue);
}
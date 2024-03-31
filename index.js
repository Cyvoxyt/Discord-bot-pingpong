const { Client } = require("discord.js");

const bot = new Client({ intents: ["Guilds"] });
console.log("connection to bot in progress...");
bot.login("Your Token")
    .then(() => console.log("connected to the bot !"))
    .catch((error) => console.log("unable to connect to bot - " + error));

bot.on("ready", async () => {

    await bot.application.commands.set([
        {
            name: "ping",
            description: "Pong!"
        }
    ]);

    console.log("The bot is ready !");
});

bot.on("interactionCreate", (interaction) => {

    if (!interaction.isCommand()) return;

    if (interaction.commandName === "ping")
        interaction.reply("Pong!");
});

import { Client, Intents } from "discord.js";
import { commands } from "./commands";
import { handlers } from "./events";

const bot = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

handlers.forEach(handler => handler(bot, commands))

bot.login(process.env.DISCORD_TOKEN)

bot.on('debug', (msg) => {
    console.log(msg)
})
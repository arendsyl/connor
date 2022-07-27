import { Client } from "discord.js";
import { Handler } from ".";
import { ChatInputCommand } from "../common/ChatInputCommand.class";

export const onReady: Handler = (client: Client, commands: ChatInputCommand[]) =>
    client.once('ready', async (c: Client) => {
        console.info(`Bot ${c.user?.username} is ready`);
        await client.application?.commands.set(
            commands.map(cmd => cmd.data)
        )
        .then(console.info)
        .catch(console.error)
    })
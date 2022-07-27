import { Client, Interaction } from "discord.js";
import { Handler } from ".";
import { ChatInputCommand } from "../common/ChatInputCommand.class";

export const onInteractionCreate: Handler = (client: Client, commands: ChatInputCommand[]) => {
    client.on('interactionCreate', async (interaction: Interaction) => {
        if(interaction.isCommand()) {
            console.info(interaction)
            await interaction.deferReply()
            await commands.find(command => command.data.name === interaction.commandName)?.run(interaction)
        }
    })
}
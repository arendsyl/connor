import { CommandInteraction } from "discord.js";
import { ChatInputCommand } from "../common/ChatInputCommand.class";

export const PingCommand: ChatInputCommand = {
    data: {
        name: 'ping',
        description: 'answer with a Pong',
        descriptionLocalizations: {
            fr: 'réponds avec un Pong'
        }
    },
    async run(command: CommandInteraction): Promise<void> {
        await command.followUp('Pong')
    }
}
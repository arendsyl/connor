import { ChatInputApplicationCommandData, CommandInteraction } from "discord.js";

export interface ChatInputCommand {
    data: ChatInputApplicationCommandData
    run: (command: CommandInteraction) => Promise<void>
}
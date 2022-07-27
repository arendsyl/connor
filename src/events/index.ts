import { Client } from "discord.js"
import { ChatInputCommand } from "../common/ChatInputCommand.class"
import { onInteractionCreate } from "./interactionCreate"
import { onReady } from "./ready"

export const handlers: Handler[] = [
    onReady,
    onInteractionCreate,
]

export type Handler = (client: Client, commands: ChatInputCommand[]) => void
import { IMessage } from "./IMessage";

export interface IMessageHandler {
    (message: IMessage): void
}
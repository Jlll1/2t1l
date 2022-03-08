import { IMessage } from "./Messages/IMessage";
import { IMessageHandler } from "./Messages/IMessageHandler";
import { JoinRoomRequest } from "./Messages/JoinRoomRequest";

export class MessageChannel {
    private static readonly ws = new WebSocket("ws://localhost:4444/app");
    private static readonly handlers = new Map<string, IMessageHandler[]>([
        ['JoinRoomRequest', [((message: JoinRoomRequest) => { this.ws.send(JSON.stringify(message)); }) as IMessageHandler]]
    ]);

    public static subscribe(messageType: string, handler: (message: IMessage) => void) {
        const existingHandlers  = MessageChannel.handlers.get(messageType) ?? [];
        MessageChannel.handlers.set(messageType, [...existingHandlers, handler]);
    }

    public static send(message: IMessage) {
        const handlers = MessageChannel.handlers.get(message.type) ?? [];
        handlers.forEach(h => h(message));
    }
}

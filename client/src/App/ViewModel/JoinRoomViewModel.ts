import { MessageChannel } from "../../Framework/MessageChannel"
import { JoinRoomRequest } from "../Messages/JoinRoomRequest"

export class JoinRoomViewModel {
    constructor() { console.log('Hello'); }
    public joinRoom(roomId: string, username: string): void {
        MessageChannel.send(new JoinRoomRequest(roomId, username));
    }
}
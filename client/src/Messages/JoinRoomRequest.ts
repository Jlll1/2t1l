import { IMessage } from "./IMessage";

export class JoinRoomRequest implements IMessage {
    public readonly type: string;
    public readonly roomId: string;
    public readonly username: string;

    constructor(roomId: string, username: string) {
        this.type = 'JoinRoomRequest';
        this.roomId = roomId;
        this.username = username;
    }
}
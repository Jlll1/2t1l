import { IMessage } from "./IMessage";

export class RoomJoinedEvent implements IMessage {
    public readonly type: string;
    public readonly roomId: string;
    public readonly users: string[];

    constructor(roomId: string, users: string[]) {
        this.type = 'RoomJoinedEvent';
        this.roomId = roomId;
        this.users = users;
    }
}
import { MessageChannel } from "../MessageChannel";
import { JoinRoomRequest } from "../Messages/JoinRoomRequest";
import { IViewComponent } from "./IViewComponent";

export class JoinRoomComponent implements IViewComponent {
        view(): string {
        return `
<form id="joinroom-form">
    <label for="roomId">Room Id</label>
    <input type="text" id="room-id">
    <label for="username">Your name</label>
    <input type="text" id="username">
    <input type="submit" value="Join room">
</form>
        `;
    }

    init(): void {
        document?.getElementById('joinroom-form')
        ?.addEventListener('submit', function (ev) {
            ev.preventDefault();
            const name = (document.getElementById('username') as HTMLInputElement)?.value;
            const roomId = (document.getElementById('room-id') as HTMLInputElement)?.value;
            MessageChannel.send(new JoinRoomRequest(roomId, name));
        });
    }
}
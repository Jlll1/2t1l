import { IViewComponent } from "./IViewComponent";

export class RootComponent implements IViewComponent {
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
        const ws = new WebSocket("ws://localhost:4444/app");

        ws.addEventListener("message", function (ev) {
            console.log(ev);
        });

        document?.getElementById('joinroom-form')
        ?.addEventListener('submit', function (ev) {
            ev.preventDefault();
            const name = (document.getElementById('username') as HTMLInputElement)?.value;
            const roomId = (document.getElementById('room-id') as HTMLInputElement)?.value;
            ws.send(
                JSON.stringify({
                    type: "JoinRoomRequest",
                    roomId: roomId,
                    username: name 
                })
            )
        });
    }
}
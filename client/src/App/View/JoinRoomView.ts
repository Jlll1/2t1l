import { IView } from "../../Framework/IView";
import { JoinRoomViewModel } from "../ViewModel/JoinRoomViewModel";

export class JoinRoomView implements IView {
    private viewModel: JoinRoomViewModel;

    constructor() {
        this.viewModel = new JoinRoomViewModel();
    }

    view(): string {
        return `
<form id="joinroom-form">
    <label for="room-id">Room Id</label>
    <input type="text" id="room-id">
    <label for="username">Your name</label>
    <input type="text" id="username">
    <input type="submit" value="Join room">
</form>
        `;
    }

    init(): void {
        document?.getElementById('joinroom-form')
            ?.addEventListener('submit', e => this.handleJoinRoomFormSubmit(e));
    }

    private handleJoinRoomFormSubmit(event: SubmitEvent) {
        event.preventDefault();
        const roomId = (document.getElementById('room-id') as HTMLInputElement)?.value;
        const username = (document.getElementById('username') as HTMLInputElement)?.value;
        if (!username || !roomId) {
            return;
        }

        this.viewModel.joinRoom(roomId, username);
    }

}
import { View } from "../View";
import { IViewComponent } from "./IViewComponent";
import { JoinRoomComponent } from "./JoinRoomComponent";
import { RoomComponent } from "./RoomComponent";
import { MessageChannel } from "../MessageChannel";

export class RootComponent implements IViewComponent {
    private rootView: View;

    constructor() {
        this.rootView = new View("root");
    }

    view(): string {
        return `<div id="root"></div>`;
    }

    init(): void {
        this.rootView.setView(new JoinRoomComponent());

        MessageChannel.subscribe('RoomJoinedEvent', m => {
            this.rootView.setView(new RoomComponent());
        });
    }
}
import { IView } from "../../Framework/IView";
import { ViewContainer } from "../../Framework/ViewContainer";
import { JoinRoomView } from "./JoinRoomView";
import { RoomView } from "./RoomView";
import { MessageChannel } from "../../Framework/MessageChannel";

export class RootView implements IView {
    private rootViewContainer: ViewContainer;

    constructor() {
        this.rootViewContainer = new ViewContainer('root');
    }

    view(): string {
        return `<div id="root"></div>`;
    }

    init(): void {
        this.rootViewContainer.setView(new JoinRoomView());

        MessageChannel.subscribe('RoomJoinedEvent', m => {
            this.rootViewContainer.setView(new RoomView());
        });
    }
}
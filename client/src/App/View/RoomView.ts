import { IView } from "../../Framework/IView";

export class RoomView implements IView {
    view(): string {
        return `<h1>Welcome in my room</h1>`; 
    }

    init(): void {
    }

}
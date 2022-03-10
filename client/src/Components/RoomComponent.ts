import { IViewComponent } from "./IViewComponent";

export class RoomComponent implements IViewComponent {
    view(): string {
        return `<h3>Welcome to my room</h3>`
    }
    init(): void {
    }
}
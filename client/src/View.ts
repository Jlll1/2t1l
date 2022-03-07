import { IViewComponent } from "./Components/IViewComponent";

export class View {
    constructor (private targetId: string) { }

    setView(component: IViewComponent): void {
        const html = component.view();
        const viewContainer = document.getElementById(this.targetId);
        if (!viewContainer) {
           throw `ViewContainer with id "${this.targetId}" not found`; 
           return
        }

        viewContainer.innerHTML = html;
        component.init();
    }
}
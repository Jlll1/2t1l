import { IView } from "./IView";

export class ViewContainer {
    constructor (private targetId: string) { }

    setView(component: IView): void {
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
import { RootView } from "./App/View/RootView";
import { ViewContainer } from "./Framework/ViewContainer";

document.addEventListener('DOMContentLoaded', function() {
    (new ViewContainer("app")).setView(new RootView());
}, false);
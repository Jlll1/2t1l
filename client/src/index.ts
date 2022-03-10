import { RootComponent } from "./Components/RootComponent";
import { View } from "./View";

document.addEventListener('DOMContentLoaded', function() {
    (new View("app")).setView(new RootComponent());
}, false);
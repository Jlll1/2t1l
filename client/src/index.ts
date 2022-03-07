import { RootComponent } from "./Components/RootComponent";
import { View } from "./View";

document.addEventListener('DOMContentLoaded', function() {
    (new View("root")).setView(new RootComponent());
}, false);
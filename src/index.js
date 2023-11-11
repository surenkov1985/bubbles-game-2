import assets from "./assets";
import { Loader } from "./libs/loader";
import { App } from "./libs/app";

import Gameplay from "./screens/gameplay";

global.App = App;
global.EE = new PIXI.utils.EventEmitter();

App.init();
App.addTicker();

Loader.load(assets, () => {
	App.Gameplay = App.addScreen(new Gameplay());

	App.Gameplay.show();
});

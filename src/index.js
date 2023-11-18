import * as PIXI from "pixi.js";
import assets from "./assets";
import Loader from "./libs/loader";
import App from "./libs/app";

import Gameplay from "./screens/gameplay";
import { Quiz } from "./screens/quiz";

global.App = App;
global.EE = new PIXI.utils.EventEmitter();

App.init();
App.addTicker();

Loader.load(assets, () => {
	App.Quiz = App.addScreen(new Quiz());

	App.Quiz.show();

	// App.Gameplay = App.addScreen(new Gameplay());
	//
	// App.Gameplay.show();
});

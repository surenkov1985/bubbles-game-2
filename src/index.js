import * as PIXI from "pixi.js";
// import { sound } from '@pixi/sound';
import '@pixi/sound';
import assets from "./assets";
import Loader from "./libs/loader";
import App from "./libs/app";

import Gameplay from "./screens/gameplay";
import BubblesMenu from "./screens/bubblesMenu";
import { QuizGameplay } from "./screens/quizGameplay";
import { QuizIntro } from "./screens/quizIntro";
import { Quiz } from "./screens/quiz";
import { QuizCTA } from "./screens/quizCTA";

global.App = App;
global.EE = new PIXI.utils.EventEmitter();

App.init();
App.addTicker();

Loader.load(assets, () => {

	// App.QuizGameplay = App.addScreen(new QuizGameplay());
	// App.QuizIntro = App.addScreen(new QuizIntro());
	// App.Quiz = App.addScreen(new Quiz());
	// App.QuizCTA = App.addScreen(new QuizCTA());

	// App.QuizGameplay.show();
	// App.QuizIntro.show();

	App.BubblesMenu = App.addScreen(new BubblesMenu());
	App.Gameplay = App.addScreen(new Gameplay());

	App.BubblesMenu.show();
	// App.Gameplay.show();
});

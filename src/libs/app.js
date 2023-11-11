import settings from "../settings";
import "./math";
import isMobile from "is-mobile";

export const App = {
	app: null,
	appContainer: null,
	screens: [],
	stage: null,

	init: function () {
		this.app = new PIXI.Application({
			width: settings.width,
			height: settings.height,
			backgroundColor: 0x227dae,
		});

		this.appContainer = document.getElementById("app");
		this.appContainer.appendChild(this.app.view);

		this.renderer = this.app.renderer;
		this.ticker = PIXI.Ticker.shared;
		this.stage = this.app.stage;

		this.renderer.plugins.interaction.moveWhenInside = true;

		this.aspectRatio = 1;

		this.update = new PIXI.Runner("update");
	},

	removeScreen: function (screen) {
		for (let i = 0; i < this.screens.length; i++)
			if (this.screens[i] === screen) {
				this.screens.splice(i, 1);
				break;
			}
	},

	addTicker: function () {
		this.ticker.add(this.updateHandle, this);
	},

	updateHandle: function (dt) {},

	addScreen: function (screen) {
		this.removeScreen(screen);

		this.screens.push(screen);

		if (!this[screen.name]) this[screen.name] = screen;
		else console.error('screen name "' + screen.name + '" already exist');

		screen.create();
		screen.hide();

		return screen;
	},
};

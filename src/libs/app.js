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

	updateHandle: function (dt) {
		if (this.fpsCounter) this.fpsCounter.begin();

		// EE.emit('update', dt);
		this.update.emit(dt);

		if (this.fpsCounter) this.fpsCounter.end();
	},

	resizeHandle: function (e) {
		this.aspectRatio = window.innerWidth / window.innerHeight;
		this.isLandscape = this.aspectRatio >= 1;
		this.isPortrait = !this.isLandscape;
		const DEFAULT_WIDTH = this.isLandscape ? settings.width : settings.height;
		const DEFAULT_HEIGHT = this.isLandscape ? settings.height : settings.width;
		let resizeScale = window.innerWidth / window.innerHeight / (DEFAULT_WIDTH / DEFAULT_HEIGHT);
		let newWidth = resizeScale > 1 ? DEFAULT_WIDTH * resizeScale : DEFAULT_WIDTH;
		let newHeight = resizeScale < 1 ? DEFAULT_HEIGHT / resizeScale : DEFAULT_HEIGHT;
		this.renderer.resize(newWidth, newHeight);
		this.stage.position.set(newWidth / 2, newHeight / 2);
		App.isMobile = isMobile();
		EE.emit("resize", newWidth, newHeight);
		// this.resize.emit(newWidth, newHeight);
	},

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

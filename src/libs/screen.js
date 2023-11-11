import { BuildMixin } from "./screen.build";
import { App } from "./app";

export default class Screen extends PIXI.Container {
	constructor() {
		super();

		this.active = false;

		this.containers = [];
		this.events = {};
	}

	create() {
		this.beforeBuild();

		this.buildContainers(this, this.containers, this);

		App.stage.addChild(this);

		this.buildEvents(this.events, this);

		this.build();
	}

	////////////////////////

	beforeBuild() {}

	build() {}

	chown() {}

	hidden() {}

	update() {}

	resize() {}

	////////////////////////

	show() {
		this.active = true;
		this.visible = true;

		App.update.add(this);
	}

	hide() {
		this.active = false;
		this.visible = false;

		App.update.remove(this);
	}
}

Object.assign(Screen.prototype, BuildMixin);

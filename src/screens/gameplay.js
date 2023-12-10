import Screen from '../libs/screen';
import settings from '../settings';

export default class Gameplay extends Screen {

	constructor() {
		super();

		this.name = 'Gameplay';

		this.score = 0;

		this.MAX_LIVES = 3;

		this.lives = this.MAX_LIVES;

		this.livesChildren = [];

		for (let i = 0; i < this.MAX_LIVES; i++) {
			this.livesChildren.push({});
		}

		this.containers = [
			{name: "game cont", children: [
				{name: "game bg", type: "sprite", image: "gameplay_bg.jpg", scaleType: 'coverScreen', scale: 1},


			]},
			{name: "ui cont", children: [
				{name: "ui_bg", type: "sprite", image: "ui_bg.png", scaleType: 'coverScreen',scalePortrait: [1, 1], scaleLandscape: [1, 0.5], position: [0, -App.app.screen.height / 2], anchor:[ 0.5, 0]},
				{name: "pause_btn", button: "pause", type: "sprite", image: "pause_btn.png", eventMode: "static", cursor: "pointer",position: [0, -App.app.screen.height / 2]},
				{name: "heart_ui", type: "sprite", image: "ui_heart.png"},

				{name: "hearts cont", children: [...this.livesChildren.map(() => {

					return {name: `live`, type: "sprite", image:"particle.png"}
				})]},
				{name: "score_ui", type:"text", text: "SCORE: " + this.score, anchor: [0, 0.5], styles: {
					fontFamily: "Hobo std",
					fill: 0xffffff,
					fontSize: 60,
					stroke: 0x926DFE,
					strokeThickness: 5
				}}
			]}

		];

		this.events = {
			"Gameplay pause Over": function (container, e) {

				container.cursor = "pointer";
			},
		};
	}

	// ////////////////////////////////////////////////////////////////////////////////////////// EVENTS
	// //////////////////////////////////////////////////////////////////////////////////////////

	beforeBuilt() {}

	built() {


		console.log(this["hearts cont"])
	}

	shown() {
		this.startGameplay();
		this["pause_btn"].y = -App.app.screen.height / 2 + this["ui_bg"].height - this["pause_btn"].height / 6;
		this["pause_btn"].x = App.app.screen.width / 2 - this["pause_btn"].height / 2 - 50;
		this["heart_ui"].y = -App.app.screen.height / 2 + this["ui_bg"].height / 3;

		(this["hearts cont"].children).forEach((item, i) => {
			item.y = this["heart_ui"].y;
			item.x = this["heart_ui"].width + item.width * i + (item.width / 4 * i)

		});

		this["score_ui"].x = -App.app.screen.width / 2 + 50
		this["score_ui"].y = this["heart_ui"].y
	}

	hidden() {

	}

	resize() {
		this["ui_bg"].y = -App.app.screen.height / 2;
		this["pause_btn"].x = App.app.screen.width / 2 - this["pause_btn"].height / 2 - 50;
		this["pause_btn"].y = -App.app.screen.height / 2 + this["ui_bg"].height - this["pause_btn"].height / 6;

		this["heart_ui"].y = -App.app.screen.height / 2 + this["ui_bg"].height / 3;

		(this["hearts cont"].children).forEach((item, i) => {
			item.y = this["heart_ui"].y;
			item.x = this["heart_ui"].width + item.width * i + (item.width / 4 * i)

		});

		this["score_ui"].x = -App.app.screen.width / 2 + 50
		this["score_ui"].y = this["heart_ui"].y
	}

	update(dt) {

	}

	// ////////////////////////////////////////////////////////////////////////////////////////// GAME
	// //////////////////////////////////////////////////////////////////////////////////////////
	startGameplay() {

	}

}

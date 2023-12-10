
import Screen from '../libs/screen'

export default class BubblesMenu extends Screen {

	constructor(){

		super();

		this.name = 'BubblesMenu';

		this.containers = [
			{name: "menu cont", children: [
				{name: "menu bg", type: "sprite", image: "menu_bg.jpg", scaleType: 'coverScreen', scale: 1},
				{name: "menu logo", type: "sprite", image: "menu_text.png", positionPortrait: [0, -500], positionLandscape: [-400, 0], scale: 1},
				{name: "menu playButton", type: "sprite", image: "menu_play_btn.png", button: "start", positionPortrait: [0, 300], positionLandscape: [500, 0], scale: 1},
			]},
		];

		this.events = {
			"BubblesMenu start Over": function (container, e) {

				container.cursor = "pointer";
			},

			"BubblesMenu start Down": function (container) {

				this.pulseButton(container);

				this.playSound('click.ogg');
			}
		};
	}

	beforeBuilt() {

	}

	built() {


	}

	shown() {
		this.startGameplay();

	}

	hidden() {

	}

	resize() {


	}

	update(dt) {

	}

	// ////////////////////////////////////////////////////////////////////////////////////////// GAME
	// //////////////////////////////////////////////////////////////////////////////////////////
	startGameplay() {

	}

	pulseButton(container) {

		GSAP.timeline()

			.to(container, {scaleX: 0.9, scaleY: 0.9, duration: 0.1})
			.to(container, {scaleX: 1, scaleY: 1, duration: 0.2, ease: "elastic.out"})
			.then(() => {
				this.startGame();
			})
	}

	startGame() {

		App.BubblesMenu.hide();
		App.Gameplay.show();
	}
}
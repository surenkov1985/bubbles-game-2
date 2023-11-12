import Screen from '../libs/screen';

export default class Gameplay extends Screen {

	constructor() {
		super();

		this.name = 'Gameplay';

		this.containers = [
			{name: "game cont", children: [
				// {name: "game bg", type: "sprite", image: "bg-sheet0.png", scaleType: 'coverScreen', scale: 2}
			]},
			{name: "menu cont", children: [
				{name: "menu bg", type: "sprite", image: "menu-bg.jpg", scaleType: 'coverScreen', scale: 2},
				{name: "menu logo", type: "sprite", image: "menu-logo.png", positionPortrait: [0, -500], positionLandscape: [-400, 0], scale: 2},
				{name: "playButton", type: "sprite", image: "playbtn-sheet0.png", positionPortrait: [0, 400], positionLandscape: [500, 0], scale: 5},
				// {name: "aaa", type: "sprite", image: "aaa.png"},
			]},
		];

		this.events = {

		};
	}

	// ////////////////////////////////////////////////////////////////////////////////////////// EVENTS
	// //////////////////////////////////////////////////////////////////////////////////////////
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

}

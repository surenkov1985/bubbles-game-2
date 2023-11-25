import Screen from "../libs/screen";

export class QuizGameplay extends Screen {

	constructor() {
		super();

		this.name = "QuizGamplay";
	}

	beforeBuilt() {
		this.currentScreen = "intro";
	}

	built(){}

	shown(){

		this.startGamePlay();
	}

	hidden() {}

	resize() {}

	update(dt) {

	}

	/////////////////////////////

	startGamePlay() {

		this.showGame(this.currentScreen);
	}

	showGame(screen = this.currentScreen) {

		this.currentScreen = screen;

		App.QuizIntro.hide();
		App.Quiz.hide();
		App.QuizCTA.hide();

		switch (screen) {
			case "intro":
				App.QuizIntro.show();
				break;

			case "quiz":
				App.Quiz.show();
				break;

			case "cta":
				App.QuizCTA.show();
				break;
		}
	}
}
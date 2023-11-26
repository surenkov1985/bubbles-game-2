import Screen from "../libs/screen";

export class QuizCTA extends Screen {
	constructor() {
		super();

		this.name = "QuizCTA";

		this.score = 0;

		this.containers = [

		// контейнер cta
		{ name: "cta cont", children: [

			// фон контейнера cta
			{ name: "cta_bg cont", children: [{name: "bg", type: "sprite", image: "quiz-cta-bg.png", scaleType: "coverScreen"}] },

			// текст
			{ name: "cta_text cont", positionPortrait: [0, -600], positionLandscape: [-450, -300], children: [
				{ name: "cta_text_bg", type: "sprite", image: "button-black.png", children: [
					{ name: "quiz_name_text", type: "text", text: "Result", styles: { fill: 0xffffff, fontSize: 50, fontWeight: 600 } },
				]}
			]},

			// звезда
			{ name: "star_cont cont",  positionPortrait: [0, -100], positionLandscape: [-500, 100], children: [
				{ name: "star", type: "sprite", image: "star.png", scaleLandscape: 0.8 }
			]},

			// кнопка результата
			{ name: "quiz_start cont", positionPortrait: [0, 500], positionLandscape: [400, 0], children: [
				{ name: "quiz_start_bg button", button: "result", type: "sprite", image: "quiz_button.png", children: [
					{ name: "quiz_name_text", type: "text", text: "Watch more", styles: { fill: 0xffffff, fontSize: 60, fontWeight: 600 } },
				]},
			]},
		]}
	];

	this.events = {
		"QuizCTA result Over": function (container, e) {
			container.cursor = "pointer";
		},

		"QuizCTA result Down": function (container, e) {
			this.pulseResultButton(container);

		},
	};
	}

	beforeBuilt() {

		// this.score = App.score;
		//
	}

	built() {



		// this["star_text"].params.text = 50;
		// const score = new PIXI.Text(`Вы набрали ${App.Quiz.score} баллов!`, { fill: 0xffffff, fontSize: 56, fontWeight: 500, align: "center", wordWrap: true, wordWrapWidth: 300 });
		// score.anchor.set(0.5);
		// score.x = 50;
		// score.y = -10;
		// this["star_cont cont"].addChild(score);
	}

	shown() {

		const score = new PIXI.Text(`Вы набрали ${App.Quiz.score} баллов!`, { fill: 0xffffff, fontSize: 56, fontWeight: 500, align: "center", wordWrap: true, wordWrapWidth: 300 });
		score.anchor.set(0.5);
		score.x = 50;
		score.y = -10;
		this["star_cont cont"].addChild(score);
	}



	/////////////////////////////////////////////////

	pulseResultButton(container) {
		if (!container) return;
		// console.log(container);

		GSAP.timeline()
			.to(container, { scaleX: 0.95, scaleY: 0.9, duration: 0.1 })
			.to(container, { scaleX: 1, scaleY: 1, duration: 0.3, ease: "elastic.out" })
			.then(() => {
				// this.startedQuiz(container);
			});
	}

	resultQuiz(container) {

		const questionsContainer = this["questions cont"];
		const menuContainer = this['menu cont'];

		menuContainer.visible = false;
		menuContainer.params.visible = false;
		questionsContainer.children[1].visible = true;
		questionsContainer.children[1].params.visible = true;
	}
}
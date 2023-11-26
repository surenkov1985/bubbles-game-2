import Screen from "../libs/screen";

export class QuizIntro extends Screen {
	constructor() {
		super();

		this.name = "QuizIntro";

		this.containers = [

			// контейнер меню
			{ name: "menu cont", children: [

				// фон контейнера меню
				{ name: "bg cont", children: [
					{ name: "bg", type: "sprite", image: "quiz-cta-bg.png", scaleType: "coverScreen" }
				]},

				// Название опроса
				{ name: "quiz_name cont", positionPortrait: [0, -600], alpha: 0, positionLandscape: [-400, -300], children: [
					{ name: "quiz_name_bg", type: "sprite", image: "button-black.png", children: [
						{ name: "quiz_name_text", type: "text", text: "Minecraft", styles: { fill: 0xffffff, fontSize: 50, fontWeight: 600 } },
					]},
				]},

				// персонажи
				{ name: "quiz_character1 cont", children: [
					{ name: "quiz_char", type: "sprite", image: "quiz-cta-char-1.png", positionPortrait: [-500, 700], positionLandscape: [-900, 150] },
				]},
				{ name: "quiz_character2 cont", children: [
					{ name: "quiz_char", type: "sprite", image: "quiz-cta-char-2.png", positionPortrait: [300, 700], positionLandscape: [-350, 200] },
				]},
				{ name: "quiz_character3 cont", children: [
					{ name: "quiz_char", type: "sprite", image: "quiz-cta-char-3.png", positionPortrait: [-450, -300], positionLandscape: [200, -350] },
				]},
				{ name: "quiz_character4 cont", children: [
					{ name: "quiz_char", type: "sprite", image: "quiz-cta-char-4.png", positionPortrait: [400, -250], positionLandscape: [900, -300] },
				]},

				// Текст опроса
				{ name: "quiz_text", type: "text", text: "Насколько хорошо ты знаешь Minecraft", positionPortrait: [0, -50], positionLandscape: [400, -100], styles: { fill: 0x000000, fontSize: 72, fontWeight: 700, _wordWrap: true, wordWrapWidth: 800, align: "center" } },

				// кнопка старт
				{ name: "quiz_start cont", elasted: 0, initScale : 1,rubberScale : 0, positionPortrait: [0, 200], positionLandscape: [400, 200], children: [
					{ name: "quiz_start_bg button", button: "start", type: "sprite", image: "quiz_button.png", children: [
						{ name: "quiz_name_text", type: "text", text: "Пройти опрос", styles: { fill: 0xffffff, fontSize: 60, fontWeight: 600 } },
					]},
				]},
			]},
		];

		this.events = {

			"QuizIntro start Over": function (container, e) {
				container.cursor = "pointer";
			},

			"QuizIntro start Down": function (container, e) {
				this.pulseStartButton(container);

			},
		};
	}

	beforeBuilt() {}

	built() {}

	shown() {
		// const questions = this["question1 cont"].children[2].children;
		// // console.log(this["quiz_character1 cont"]);
		// let delay = 0.0;
		// questions.forEach((quest) => {
		// 	let defPosY = quest.params.position[1];
		// 	delay += 0.1;
		// 	quest.y = defPosY + 50;
		// 	quest.alpha = 0;
		// 	GSAP.timeline()
		// 		.to(quest, { y: defPosY - 10, alpha: 1, duration: 0.2, ease: "power1.out" }, delay)
		// 		.to(quest, { y: defPosY, duration: 0.2, ease: "power1.out" });
		// });
		console.log(this["quiz_character1 cont"].children[0]);
		GSAP.timeline()
			.to(this["bg cont"], {scaleX: 1.1, scaleY: 1.1, duration: 0.3})
			.to(this["bg cont"], {scaleX: 1, scaleY: 1, duration: 0.3})
			.to(this["quiz_name cont"], {alpha: 1,scaleX: 1.1, scaleY: 1.1, duration: 0.3})
			.to(this["quiz_name cont"], {scaleX: 1, scaleY: 1, duration: 0.3})
	}

	/////////////////////////////////////////////////

	pulseStartButton(container) {
		if (!container) return;
		// console.log(container);

		GSAP.timeline()
			.to(container, { scaleX: 0.95, scaleY: 0.9, duration: 0.1 })
			.to(container, { scaleX: 1, scaleY: 1, duration: 0.3, ease: "elastic.out" })
			.then(() => {
				this.startedQuiz(container);
			});
	}

	startedQuiz(container) {

		App.QuizIntro.hide();
		App.Quiz.show()
		// const questionsContainer = this["Quiz questions cont"];
		// const menuContainer = this['menu cont'];
		//
		// menuContainer.visible = false;
		// menuContainer.params.visible = false;
		// questionsContainer.children[1].visible = true;
		// questionsContainer.children[1].params.visible = true;
	}

	update(dt) {
		// console.log(dt)
		this["quiz_start cont"].params.elasted += dt;
		this["quiz_start cont"].params.rubberScale = Math.sin((Math.PI * this["quiz_start cont"].params.elasted) / 20.0) / 50;

		this["quiz_start cont"].scaleX = this["quiz_start cont"].params.initScale + this["quiz_start cont"].params.rubberScale;
		this["quiz_start cont"].scaleY = this["quiz_start cont"].params.initScale + this["quiz_start cont"].params.rubberScale;

		// console.log(Math.sin((Math.PI * this["quiz_start cont"].params.elasted) / 80.0) * 20)

		this["quiz_character1 cont"].children[0].x = this["quiz_character1 cont"].children[0].params.position[0] + Math.sin((Math.PI * this["quiz_start cont"].params.elasted) / 40.0) * 3
		this["quiz_character1 cont"].children[0].y = this["quiz_character1 cont"].children[0].params.position[1] + Math.sin((Math.PI * this["quiz_start cont"].params.elasted) / 50.0) * 4

	}
}
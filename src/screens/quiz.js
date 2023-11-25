import Screen from "../libs/screen";

export class Quiz extends Screen {
	constructor() {
		super();

		this.name = "Quiz";

		this.containers = [

			// контейнер вопросов
			{ name: "quests cont", children: [

				// фон контейнера вопросов
				{ name: "bg cont", children: [{ name: "bg", type: "sprite", image: "quiz_bg.png", scaleType: "coverScreen" }] },

				// вопросы
				{ name: "questions cont", children: [

					// вопрос 5
					{ name: "question5 cont", visible: false, children: [
						{ name: "hero card", type: "sprite", image: "quiz_character_5.png", positionPortrait: [0, -400], positionLandscape: [-500, 0], scale: 0.8, },
						{ name: "quest", type: "text", text: "Вопрос 5", positionPortrait: [0, -200], positionLandscape: [400, -300],styles: {
							fontSize: 80,
							fontFamily: "Arial",
							fontWeight: 700,
							fill: 0x000000,
							stroke: 0xffffff,
							strokeThickness: 15,
							align: "center",
						}},

						// кнопки ответов
						{ name: "responses",positionLandscape: [400, -100], positionPortrait: [0, 100], children: [
							{ name: "resp1 button", position: [0, 0], children: [
								{ name: "resp_btn", type: "sprite", image: "quiz_button.png", scale: 0.8 },
								{ name: "resp_text", type: "text", text: "Ответ 1", styles: { fill: 0xffffff, fontSize: 56, fontWeight: 500 } },
							]},
							{ name: "resp2 button", position: [0, 150], children: [
								{ name: "resp_btn", type: "sprite", image: "quiz_button.png", scale: 0.8 },
								{ name: "resp_text", type: "text", text: "Ответ 2", styles: { fill: 0xffffff, fontSize: 56, fontWeight: 500 } },
							]},
							{ name: "resp3 button", position: [0, 300], children: [
								{ name: "resp_btn", type: "sprite", image: "quiz_button.png", scale: 0.8 },
								{ name: "resp_text", type: "text", text: "Ответ 3", styles: { fill: 0xffffff, fontSize: 56, fontWeight: 500 } },
							]},
						]},
					]},

					// вопрос 4
					{ name: "question4 cont", visible: false, children: [
						{ name: "hero card", type: "sprite", image: "quiz_character_4.png", positionPortrait: [0, -400], positionLandscape: [-500, 0], scale: 0.8 },
						{ name: "quest", type: "text", text: "Вопрос 4", positionPortrait: [0, -200], positionLandscape: [400, -300],styles: {
							fontSize: 80,
							fontFamily: "Arial",
							fontWeight: 700,
							fill: 0x000000,
							stroke: 0xffffff,
							strokeThickness: 15,
							align: "center"
						}},

						// кнопки ответов
						{ name: "responses", positionLandscape: [400, -100], positionPortrait: [0, 100], children: [
							{ name: "resp1 button", position: [0, 0], button: "btn", children: [
								{ name: "resp_btn", type: "sprite", image: "quiz_button.png", scale: 0.8 },
								{ name: "resp_text", type: "text", text: "Ответ 1", styles: { fill: 0xffffff, fontSize: 56, fontWeight: 500 } },
							]},
							{ name: "resp2 button", position: [0, 150], button: "btn", children: [
								{ name: "resp_btn", type: "sprite", image: "quiz_button.png", scale: 0.8 },
								{ name: "resp_text", type: "text", text: "Ответ 2", styles: { fill: 0xffffff, fontSize: 56, fontWeight: 500 } },
							]},
							{name: "resp3 button", position: [0, 300], button: "btn", children: [
								{ name: "resp_btn", type: "sprite", image: "quiz_button.png", scale: 0.8 },
								{ name: "resp_text", type: "text", text: "Ответ 3", styles: { fill: 0xffffff, fontSize: 56, fontWeight: 500 } },
							]},
						]},
					]},

					// вопрос 3
					{ name: "question3 cont", visible: false, children: [
						{ name: "hero card", type: "sprite", image: "quiz_character_3.png", positionPortrait: [0, -400], positionLandscape: [-500, 0], scale: 0.8 },
						{ name: "quest", type: "text", text: "Вопрос 3", positionPortrait: [0, -200], positionLandscape: [400, -300], styles: {
							fontSize: 80,
							fontFamily: "Arial",
							fontWeight: 700,
							fill: 0x000000,
							stroke: 0xffffff,
							strokeThickness: 15,
							align: "center",
						}},

						// кнопки ответов
						{ name: "responses", positionLandscape: [400, -100], positionPortrait: [0, 100], children: [
							{ name: "resp1 button", position: [0, 0], button: "btn", children: [
								{ name: "resp_btn", type: "sprite", image: "quiz_button.png", scale: 0.8 },
								{ name: "resp_text", type: "text", text: "Ответ 1", styles: { fill: 0xffffff, fontSize: 56, fontWeight: 500 } },
							]},
							{ name: "resp2 button", position: [0, 150], button: "btn", children: [
								{ name: "resp_btn", type: "sprite", image: "quiz_button.png", scale: 0.8 },
								{ name: "resp_text", type: "text", text: "Ответ 2", styles: { fill: 0xffffff, fontSize: 56, fontWeight: 500 } },
							]},
							{ name: "resp3 button", position: [0, 300], button: "btn", children: [
								{ name: "resp_btn", type: "sprite", image: "quiz_button.png", scale: 0.8 },
								{ name: "resp_text", type: "text", text: "Ответ 3", styles: { fill: 0xffffff, fontSize: 56, fontWeight: 500 } },
							]},
						]},
					]},

					// вопрос 2
					{ name: "question2 cont", visible: false, children: [
						{ name: "hero card", type: "sprite", image: "quiz_character_2.png", positionPortrait: [0, -400], positionLandscape: [-500, 0], scale: 0.8 },
						{ name: "quest", type: "text", text: "Вопрос 2", positionPortrait: [0, -200], positionLandscape: [400, -300], styles: {
							fontSize: 80,
							fontFamily: "Arial",
							fontWeight: 700,
							fill: 0x000000,
							stroke: 0xffffff,
							strokeThickness: 15,
							align: "center",
						}},

						// кнопки ответов
						{ name: "responses", positionLandscape: [400, -100], positionPortrait: [0, 100], children: [
							{ name: "resp1 button", position: [0, 0], button: "btn", children: [
								{ name: "resp_btn", type: "sprite", image: "quiz_button.png", scale: 0.8 },
								{ name: "resp_text", type: "text", text: "Ответ 1", styles: { fill: 0xffffff, fontSize: 56, fontWeight: 500 } },
							]},
							{ name: "resp2 button", position: [0, 150], button: "btn", children: [
								{ name: "resp_btn", type: "sprite", image: "quiz_button.png", scale: 0.8 },
								{ name: "resp_text", type: "text", text: "Ответ 2", styles: { fill: 0xffffff, fontSize: 56, fontWeight: 500 } },
							]},
							{ name: "resp3 button", position: [0, 300], button: "btn", children: [
								{ name: "resp_btn", type: "sprite", image: "quiz_button.png", scale: 0.8 },
								{ name: "resp_text", type: "text", text: "Ответ 3", styles: { fill: 0xffffff, fontSize: 56, fontWeight: 500 } },
							]},
						]},
					]},

					// вопрос 2
					{ name: "question1 cont", visible: false, children: [
						{ name: "hero card", type: "sprite", image: "quiz_character_1.png", positionPortrait: [0, -400], positionLandscape: [-500, 0], scale: 0.8 },
						{ name: "quest", type: "text", text: "Вопрос 1", positionPortrait: [0, -200], positionLandscape: [400, -300], styles: {
							fontSize: 80,
							fontFamily: "Arial",
							fontWeight: 700,
							fill: 0x000000,
							stroke: 0xffffff,
							strokeThickness: 15,
							align: "center",
						}},

						// кнопки ответов
						{name: "responses", positionLandscape: [400, -100], positionPortrait: [0, 100], children: [
							{ name: "resp1 button", cursor: "pointer", position: [0, 0], button: "btn", defaultCursor: "pointer", children: [
								{ name: "resp_btn", type: "sprite", image: "quiz_button.png", scale: 0.8 },
								{ name: "resp_text", type: "text", text: "Ответ 1", styles: { fill: 0xffffff, fontSize: 56, fontWeight: 500 } },
							]},
							{ name: "resp2 button", position: [0, 150], button: "btn", children: [
								{ name: "resp_btn", type: "sprite", image: "quiz_button.png", scale: 0.8 },
								{ name: "resp_text", type: "text", text: "Ответ 2", styles: { fill: 0xffffff, fontSize: 56, fontWeight: 500 } },
							]},
							{ name: "resp3 button", position: [0, 300], button: "btn", children: [
								{ name: "resp_btn", type: "sprite", image: "quiz_button.png", scale: 0.8 },
								{ name: "resp_text", type: "text", text: "Ответ 3", styles: { fill: 0xffffff, fontSize: 56, fontWeight: 500 } },
							]},
						]},
					]},
				]},
			]},

			// контейнер меню
			{ name: "menu cont", children: [

				// фон контейнера меню
				{ name: "bg cont", children: [
					{ name: "bg", type: "sprite", image: "quiz-cta-bg.png", scaleType: "coverScreen" }
				]},

				// Название опроса
				{ name: "quiz_name cont", positionPortrait: [0, -600], positionLandscape: [-400, -300], children: [
					{ name: "quiz_name_bg", type: "sprite", image: "button-black.png", children: [
						{ name: "quiz_name_text", type: "text", text: "Опрос", styles: { fill: 0xffffff, fontSize: 50, fontWeight: 600 } },
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
				{ name: "quiz_text", type: "text", text: "Lorem Ipsum", positionPortrait: [0, 0], positionLandscape: [400, -50], styles: { fill: 0x000000, fontSize: 72, fontWeight: 700 } },

				// кнопка старт
				{ name: "quiz_start cont", positionPortrait: [0, 200], positionLandscape: [400, 200], children: [
					{ name: "quiz_start_bg button", button: "start", type: "sprite", image: "quiz_button.png", children: [
						{ name: "quiz_name_text", type: "text", text: "Пройти опрос", styles: { fill: 0xffffff, fontSize: 60, fontWeight: 600 } },
					]},
				]},
			]},
		];

		this.events = {
			"Quiz btn Over": function (container, e) {
				container.cursor = "pointer";
			},

			"Quiz start Over": function (container, e) {
				container.cursor = "pointer";
			},

			"Quiz btn Down": function (container, e) {
				this.pulseButton(container);

			},

			"Quiz start Down": function (container, e) {
				this.pulseStartButton(container);

			},
		};
	}

	beforeBuilt() {}

	built() {}

	shown() {
		const questions = this["question1 cont"].children[2].children;
		// console.log(this["quiz_character1 cont"]);
		let delay = 0.0;
		questions.forEach((quest) => {
			let defPosY = quest.params.position[1];
			delay += 0.1;
			quest.y = defPosY + 50;
			quest.alpha = 0;
			GSAP.timeline()
				.to(quest, { y: defPosY - 10, alpha: 1, duration: 0.2, ease: "power1.out" }, delay)
				.to(quest, { y: defPosY, duration: 0.2, ease: "power1.out" });
		});
	}

	/////////////////////////////////////////////////

	pulseButton(container) {
		if (!container) return;

		GSAP.timeline()
			.to(container, { scaleX: 0.95, scaleY: 0.9, duration: 0.1 })
			.to(container, { scaleX: 1, scaleY: 1, duration: 0.3, ease: "elastic.out" })
			.then(() => {
				this.toggleQuestion(container);
			});
	}

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

	toggleQuestion(container) {

		const questionsContainer = this["questions cont"];
		const questionContainer = container.parent.parent;
		const questionIndex = questionsContainer.children.indexOf(questionContainer);

		questionContainer.visible = false;
		questionContainer.params.visible = false;
		questionsContainer.children[questionIndex - 1].visible = true;
		questionsContainer.children[questionIndex - 1].params.visible = true;
	}

	startedQuiz(container) {

		const questionsContainer = this["questions cont"];
		const menuContainer = this['menu cont'];

		menuContainer.visible = false;
		menuContainer.params.visible = false;
		questionsContainer.children[1].visible = true;
		questionsContainer.children[1].params.visible = true;
	}
}

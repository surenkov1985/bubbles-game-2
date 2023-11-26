import Screen from "../libs/screen";

export class Quiz extends Screen {
	constructor() {
		super();

		this.name = "Quiz";

		this.score = 0;

		this.quiz = {
			questions: [
				{quest: "На сколько блоков дается эффект от маяка?",
					responses: [
						{text: "25 блоков", ok: true},
						{text: "100 блоков"},
						{text: "15 блоков"}
					]
				},
				{quest: "Кто создатель майна?",
					responses: [
						{text: "Стив Джопс", ok: true},
						{text: "Я!"},
						{text: "Незнаю)"}
					]
				},
				{quest: "Какой блок в Майнкрафте нельзя скрафтить?",
					responses: [
						{text: "Блок песчаника"},
						{text: "Пустой блок", ok: true},
						{text: "Алмазный блок"}
					]
				},
				{quest: "У какого босса больше всего жизни?",
					responses: [
						{text: "Дракон"},
						{text: "Иссушитель", ok: true},
						{text: "ГАСТ"}
					]
				},
				{quest: "Как получить розу иссушения?",
					responses: [
						{text: "При помощи визора", ok: true},
						{text: "При помощи дракона"},
						{text: "Ее нужно скрафтить"}
					]
				}
			]
		};

		this.containers = [

			// контейнер вопросов
			{ name: "quests cont", children: [

				// фон контейнера вопросов
				{ name: "bg cont", children: [{ name: "bg", type: "sprite", image: "quiz_bg.png", scaleType: "coverScreen" }] },

				// вопросы
				{ name: "questions cont", children: [...this.quiz.questions.map((item, index) => {

					return { name: `question${index + 1} cont`, visible: index === this.quiz.questions.length - 1, children: [
						{ name: "hero card", type: "sprite", image: `quiz_character_${index + 1}.png`, positionPortrait: [0, -400], positionLandscape: [-500, 0], scale: 0.8, },
						{ name: "quest", type: "text", text: item.quest, positionPortrait: [0, -200], positionLandscape: [400, -300],styles: {
							fontSize: 80,
							fontFamily: "Arial",
							fontWeight: 700,
							fill: 0x000000,
							stroke: 0xffffff,
							strokeThickness: 15,
							align: "center",
							wordWrap: true,
							wordWrapWidth: 900
						}},

						// кнопки ответов
						{ name: "responses",positionLandscape: [400, 0], positionPortrait: [0, 100], children:
							[...item.responses.map((resp, ind) => {
								return { name: `resp${ind + 1} button`, position: [0, 150 * ind], ok: resp.ok, button: "btn", children: [
									{ name: "resp_ok", type: "sprite", image: resp.ok ? "green-button.png" : "quiz_button.png", scale: 0.8 },
									{ name: "resp_btn", type: "sprite", image: "yellow-button.png", scale: 0.8 },
									{ name: "resp_text", type: "text", text: resp.text, styles: { fill: 0xffffff, fontSize: 56, fontWeight: 500 } },
								]}
							})]
						},
					]}
				})]
				},
			]},
		];

		this.events = {
			"Quiz btn Over": function (container, e) {
				container.cursor = "pointer";
			},

			"Quiz btn Down": function (container, e) {
				this.pulseButton(container);

			},
		};
	}

	beforeBuilt() {}

	built() {}

	shown() {
		const questions = this["question1 cont"].children[2].children;

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

		const questionContainer = container.parent.parent;
		const responses = container.parent;
		const responseIndex = responses.children.indexOf(container);

		if (container.params.ok) this.score += 10

		responses.children.forEach((resp, index) => {

			resp.children[1].params.visible = false;
			resp.children[1].visible = false;

			if (index === responseIndex) {
				GSAP.timeline()
					.to(resp, { scaleX: 1.1, scaleY: 1.1, duration: 0.1 })
					.to(resp, { scaleX: 0, scaleY: 0, duration: 0.3, ease: "elastic.out" }, 0.7)
					.then(() => {
						this.toggleQuestion(container);
					});
			} else {
				GSAP.timeline()
					.to(resp, { scaleX: 0, scaleY: 0, duration: 0.3 }, 0.5)
			}
		});

	}

	toggleQuestion(container) {

		const questionsContainer = this["questions cont"];
		const questionContainer = container.parent.parent;
		const questionIndex = questionsContainer.children.indexOf(questionContainer);

		if (questionIndex > 0) {

			questionContainer.visible = false;
			questionContainer.params.visible = false;
			questionsContainer.children[questionIndex - 1].visible = true;
			questionsContainer.children[questionIndex - 1].params.visible = true;
		} else if (questionIndex === 0){

			questionContainer.visible = false;
			questionContainer.params.visible = false;
			App.QuizCTA.score = this.score;
			console.log(App.score)
			App.Quiz.hide();
			App.QuizCTA.show();
		}

	}

}

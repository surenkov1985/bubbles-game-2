import Screen from "../libs/screen";

export class Quiz extends Screen {
	constructor() {
		super();

		this.name = "Quiz";

		this.containers = [
			{ name: "bg cont", children: [
				{ name: "bg", type: "sprite", image: 'quiz_bg.png', scaleType: 'coverScreen' }
			]},
			{ name: "questions cont", children: [
				{name: "question5 cont", visible: false, children: [
					{name: "hero card", type: "sprite", image: "quiz_character_5.png", positionPortrait: [0,-400], positionLandscape: [ -500, 0], scale: 0.8},
					{name: "quest", type: "text", text: "Вопрос 5", styles: {fontSize: 80, fontFamily: "Arial", fontWeight: 700, fill:0x000000, stroke: 0xffffff, strokeThickness: 15, align: "center"}, positionPortrait: [0, -200], positionLandscape: [400, -300]},
					{name: "responses", positionLandscape: [400, -100], positionPortrait: [0, 100],children: [
						{name: "resp1 button", position:[0, 0], children: [
							{name: "resp_btn", type: "sprite", image: "quiz_button.png", scale: 0.8},
							{name: "resp_text", type: "text", text: "Ответ 1", styles: {fill: 0xffffff, fontSize: 56, fontWeight: 500}}
						]},
						{name: "resp2 button", position:[0, 150], children: [
							{name: "resp_btn", type: "sprite", image: "quiz_button.png", scale: 0.8},
							{name: "resp_text", type: "text", text: "Ответ 2", styles: {fill: 0xffffff, fontSize: 56, fontWeight: 500}}
						]},
						{name: "resp3 button", position:[0, 300], children: [
							{name: "resp_btn", type: "sprite", image: "quiz_button.png", scale: 0.8},
							{name: "resp_text", type: "text", text: "Ответ 3", styles: {fill: 0xffffff, fontSize: 56, fontWeight: 500}}
						]}
					]}
				]},
				{name: "question4 cont", visible: false, children: [
					{name: "hero card", type: "sprite", image: "quiz_character_4.png", positionPortrait: [0,-400], positionLandscape: [ -500, 0], scale: 0.8},
					{name: "quest", type: "text", text: "Вопрос 4", styles: {fontSize: 80, fontFamily: "Arial", fontWeight: 700, fill:0x000000, stroke: 0xffffff, strokeThickness: 15, align: "center"}, positionPortrait: [0, -200], positionLandscape: [400, -300]},
					{name: "responses", positionLandscape: [400, -100], positionPortrait: [0, 100],children: [
						{name: "resp1 button", position:[0, 0], children: [
							{name: "resp_btn", type: "sprite", image: "quiz_button.png", scale: 0.8},
							{name: "resp_text", type: "text", text: "Ответ 1", styles: {fill: 0xffffff, fontSize: 56, fontWeight: 500}}
						]},
						{name: "resp2 button", position:[0, 150], children: [
							{name: "resp_btn", type: "sprite", image: "quiz_button.png", scale: 0.8},
							{name: "resp_text", type: "text", text: "Ответ 2", styles: {fill: 0xffffff, fontSize: 56, fontWeight: 500}}
						]},
						{name: "resp3 button", position:[0, 300], children: [
							{name: "resp_btn", type: "sprite", image: "quiz_button.png", scale: 0.8},
							{name: "resp_text", type: "text", text: "Ответ 3", styles: {fill: 0xffffff, fontSize: 56, fontWeight: 500}}
						]}
					]}
				]},
				{name: "question3 cont", visible: false, children: [
					{name: "hero card", type: "sprite", image: "quiz_character_3.png", positionPortrait: [0,-400], positionLandscape: [ -500, 0], scale: 0.8},
					{name: "quest", type: "text", text: "Вопрос 3", styles: {fontSize: 80, fontFamily: "Arial", fontWeight: 700, fill:0x000000, stroke: 0xffffff, strokeThickness: 15, align: "center"}, positionPortrait: [0, -200], positionLandscape: [400, -300]},
					{name: "responses", positionLandscape: [400, -100], positionPortrait: [0, 100],children: [
						{name: "resp1 button", position:[0, 0], children: [
							{name: "resp_btn", type: "sprite", image: "quiz_button.png", scale: 0.8},
							{name: "resp_text", type: "text", text: "Ответ 1", styles: {fill: 0xffffff, fontSize: 56, fontWeight: 500}}
						]},
						{name: "resp2 button", position:[0, 150], children: [
							{name: "resp_btn", type: "sprite", image: "quiz_button.png", scale: 0.8},
							{name: "resp_text", type: "text", text: "Ответ 2", styles: {fill: 0xffffff, fontSize: 56, fontWeight: 500}}
						]},
						{name: "resp3 button", position:[0, 300], children: [
							{name: "resp_btn", type: "sprite", image: "quiz_button.png", scale: 0.8},
							{name: "resp_text", type: "text", text: "Ответ 3", styles: {fill: 0xffffff, fontSize: 56, fontWeight: 500}}
						]}
					]}
				]},
				{name: "question2 cont", visible: false, children: [
					{name: "hero card", type: "sprite", image: "quiz_character_2.png", positionPortrait: [0,-400], positionLandscape: [ -500, 0], scale: 0.8},
					{name: "quest", type: "text", text: "Вопрос 2", styles: {fontSize: 80, fontFamily: "Arial", fontWeight: 700, fill:0x000000, stroke: 0xffffff, strokeThickness: 15, align: "center"}, positionPortrait: [0, -200], positionLandscape: [400, -300]},
					{name: "responses", positionLandscape: [400, -100], positionPortrait: [0, 100],children: [
						{name: "resp1 button", position:[0, 0], children: [
							{name: "resp_btn", type: "sprite", image: "quiz_button.png", scale: 0.8},
							{name: "resp_text", type: "text", text: "Ответ 1", styles: {fill: 0xffffff, fontSize: 56, fontWeight: 500}}
						]},
						{name: "resp2 button", position:[0, 150], children: [
							{name: "resp_btn", type: "sprite", image: "quiz_button.png", scale: 0.8},
							{name: "resp_text", type: "text", text: "Ответ 2", styles: {fill: 0xffffff, fontSize: 56, fontWeight: 500}}
						]},
						{name: "resp3 button", position:[0, 300], children: [
							{name: "resp_btn", type: "sprite", image: "quiz_button.png", scale: 0.8},
							{name: "resp_text", type: "text", text: "Ответ 3", styles: {fill: 0xffffff, fontSize: 56, fontWeight: 500}}
						]}
					]}
				]},
				{name: "question1 cont", children: [
					{name: "hero card", type: "sprite", image: "quiz_character_1.png", positionPortrait: [0,-400], positionLandscape: [ -500, 0], scale: 0.8},
					{name: "quest", type: "text", text: "Вопрос 1", styles: {fontSize: 80, fontFamily: "Arial", fontWeight: 700, fill:0x000000, stroke: 0xffffff, strokeThickness: 15, align: "center"}, positionPortrait: [0, -200], positionLandscape: [400, -300]},
					{name: "responses", positionLandscape: [400, -100], positionPortrait: [0, 100],children: [
						{name: "resp1 button", cursor:"pointer", position:[0, 0], button: "btn", defaultCursor: "pointer", children: [
							{name: "resp_btn", type: "sprite", image: "quiz_button.png", scale: 0.8},
							{name: "resp_text", type: "text", text: "Ответ 1", styles: {fill: 0xffffff, fontSize: 56, fontWeight: 500}}
						]},
						{name: "resp2 button", position:[0, 150], button: "btn", children: [
							{name: "resp_btn", type: "sprite", image: "quiz_button.png", scale: 0.8},
							{name: "resp_text", type: "text", text: "Ответ 2", styles: {fill: 0xffffff, fontSize: 56, fontWeight: 500}}
						]},
						{name: "resp3 button", position:[0, 300], button: "btn", children: [
							{name: "resp_btn", type: "sprite", image: "quiz_button.png", scale: 0.8},
							{name: "resp_text", type: "text", text: "Ответ 3", styles: {fill: 0xffffff, fontSize: 56, fontWeight: 500}}
						]}
					]}
				]}
			]}
		];

		this.events = {

			"Quiz btn Over": function(container, e) {
				container.cursor = "pointer"

			},

			"Quiz btn Down": function(container, e) {
				this.pulseButton(container)

			}
		}
	}

	beforeBuilt() {

	}

	built() {


	}

	shown() {
		const questions = this["question1 cont"].children[2].children;
		console.log(questions);
		let delay = 0.0;
		questions.forEach(quest => {

			let defPosY = quest.params.position[1];
			delay += 0.1;
			quest.y = defPosY + 50;
			quest.alpha = 0
			GSAP.timeline()
				.to(quest,{y: defPosY - 10, alpha: 1, duration: 0.2, ease: 'power1.out'}, delay)
				.to(quest,{y: defPosY, duration: 0.2, ease: 'power1.out'})
		})
	}

	/////////////////////////////////////////////////

	pulseButton(container){

		if (!container) return;

		GSAP.timeline().to(container, {scaleX: 0.95, scaleY: 0.9, duration: 0.1})
			.to(container, {scaleX: 1, scaleY: 1, duration: 0.3, ease: "elastic.out"})
	}
}

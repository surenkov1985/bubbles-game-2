import Screen from "../libs/screen";
import settings from "../settings";

export default class Gameplay extends Screen {
	constructor() {
		super();

		this.name = "Gameplay";

		this.containers = [
			{
				name: "MainContainer",
				children: [
					{
						name: "game cont",
						children: [
							{ name: "background", type: "sprite", image: "background.jpg", anchor: [0] },
							{ name: "menu", type: "sprite", image: "menu.jpg", anchor: [0], width: settings.width, height: settings.height },
						],
					},
				],
			},
		];
	}
}

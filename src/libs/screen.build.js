import settings from "../settings";

export const BuildMixin = {
	buildContainers(parent, containers = [], screen) {
		if (!containers.length) return;

		for (let i = 0; i < containers.length; i++) {
			let params = containers[i];
			let name = params.name;

			let obj = this.buildChild.call(this, parent, params);

			if (obj) {
				if (screen) screen[name] = obj;

				if (params.hasOwnProperty("children")) {
					this.buildContainers(obj, params.children, screen);
				}
			}
		}
	},

	buildChild(parent, params) {
		let type = params.type || "container";
		let result = null;

		if (type === "container") {
			result = new PIXI.Container();
		} else if (type === "sprite") {
			result = new PIXI.Sprite(this.getTexture(params.image));
		} else if (type === "text") {
			result = new PIXI.Text(params.text, params.styles);
		}

		if (result) {
			result.params = params;

			if (result.anchor) result.anchor.set(0.5);

			if (parent) parent.addChild(result);

			this.applyTransforms(result, result.params);

			if (params.event || params.button) this.addInteraction(result, params.event || params.button, this);
		}

		return result;
	},

	buildEvents(events, screen) {},

	addInteraction(obj, event, screen) {},

	getTransformParam(params, paramName, defVal) {
		if (!params) return defVal;

		let val = null;
		let valPortrait = params[paramName + "Portrait"];
		let valLandscape = params[paramName + "Landscape"];

		if (App.isPortrait) {
			if (valPortrait !== undefined) val = valPortrait;
		} else {
			if (valLandscape !== undefined) val = valLandscape;
		}

		if (val === null) {
			if (params.hasOwnProperty(paramName)) {
				val = params[paramName];
			} else if (defVal) {
				val = defVal;
			}
		}

		return val;
	},

	applyTransforms(obj, params = {}) {
		for (let key in params) {
			if (/position/g.test(key)) {
				params.position = this.getTransformParam(params, "position", [0, 0]);
				obj.position.set(...params.position);
			}

			if (/rotation/g.test(key)) {
				params.rotation = this.getTransformParam(params, "rotation", 0);
				obj.rotation = params.rotation;
			}

			if (/scale/g.test(key)) {
				params.scale = this.getTransformParam(params, "scale", [1, 1]);
				let scale = !Array.isArray(params.scale) ? [params.scale, params.scale] : params.scale;
				obj.scale.set(...scale);
			}

			if (/anchor/g.test(key)) {
				params.anchor = this.getTransformParam(params, "anchor", 0.5);
				let anchor = !Array.isArray(params.anchor) ? [params.anchor, params.anchor] : params.anchor;
				if (obj.anchor) obj.anchor.set(...anchor);
			}

			if (/alpha/g.test(key)) {
				params.alpha = this.getTransformParam(params, "alpha", 1);
				obj.alpha = params.alpha;
			}

			if (/visible/g.test(key)) {
				params.visible = this.getTransformParam(params, "visible", true);
				obj.visible = params.visible;
			}

			if (/mask/g.test(key)) {
				const maskName = this.getTransformParam(params, "mask", null);
				const mask = this[maskName];
				if (mask) obj.mask = mask;
			}

			if (/width/g.test(key)) {
				params.width = this.getTransformParam(params, "width", null);

				if (obj.width) obj.width = params.width;
			}

			if (/height/g.test(key)) {
				params.height = this.getTransformParam(params, "height", null);

				if (obj.height) obj.height = params.height;
			}
		}
	},

	getTexture(key) {
		return PIXI.utils.TextureCache[key];
	},
};

const Pool = {
	CACHE: {},

	getBubble: function (type) {
		let key = "bubble_" + type;
		return this.getFromCache(key, () => createBubble(type));
	},

	getParticle: function (type) {
		let key = "particle_" + type;
		return this.getFromCache(key, () => createParticle(type));
	},

	getFromCache: function (key, callback) {
		if (!this.CACHE[key]) this.CACHE[key] = [];

		let stream = this.CACHE[key];
		let i = 0;
		let len = stream.length;
		let item;

		if (len === 0) {
			stream[0] = callback(key);
			item = stream[0];
			item.enable();

			return item;
		}

		while (i <= len) {
			if (!stream[i]) {
				stream[i] = callback(key);
				item = stream[i];
				item.enable();
				break;
			} else if (!stream[i].active) {
				item = stream[i];
				item.enable();
				break;
			} else {
				i++;
			}
		}
		return item;
	},
};

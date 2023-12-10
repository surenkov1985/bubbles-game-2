export default {
    playSound(key, options = {}) {
        const sound = PIXI.Assets.get(key);

        if (sound) {
            Object.keys(options).forEach(key => sound[key] = options[key]);
            sound.play();
        }

        return sound;
    }
}
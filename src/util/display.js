import config from "../main/config";
let { window } = config;

const display = (ctx, font, color, text, height) => {
	ctx.font = font;
	ctx.fillStyle = color;
	ctx.fillText(
		text,
		window.width / 2 - ctx.measureText(text).width / 2,
		height
	);
};

export default display;

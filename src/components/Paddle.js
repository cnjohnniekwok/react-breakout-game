import config from "../main/config";
let { game } = config;
/*
 *	 @desc  PaddleObject class
 *   @param x - paddle x position
 *   @param y - paddle y position
 *   @param width - paddle width
 *   @param height - paddle heigth
 *   @param density - paddle color
 */
class PaddleObject {
	constructor(x, y, width, height, color) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = color;
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.rect(this.x, this.y, this.width, this.height);
		ctx.stroke();
		ctx.fill();

		//debug only
		//------------------------------------------------|
		if (game.debug) {
			ctx.font = "10px Arial";
			ctx.fillStyle = "red";

			let displayx = this.x;
			let displayy = this.y;
			let displayw = this.width;
			let displayh = this.height;

			let xy = `(${displayx},${displayy})xy`;
			let xw = `x+w(${displayx + displayw},${displayy})`;
			let yh = `y+h(${displayx},${displayy + displayh})`;
			let edgeLeft = `(${displayx + Math.floor(displayw / 15)})|`;
			let edgeRight = `|(${displayx + Math.floor(displayw - displayw / 15)})`;

			let xw_offset = ctx.measureText(xy).width;
			let edgeLeft_offset = ctx.measureText(edgeLeft).width;

			ctx.fillText(xy, displayx - xw_offset, displayy);
			ctx.fillText(xw, displayx + displayw, displayy);
			ctx.fillText(
				edgeLeft,
				displayx + displayw / 15 - edgeLeft_offset,
				displayy - displayh
			);
			ctx.fillText(
				edgeRight,
				displayx + displayw - displayw / 15,
				displayy - displayh
			);
			ctx.fillStyle = "white";
			ctx.fillText(yh, displayx, displayy + displayh);
		}
	}
}

export default PaddleObject;

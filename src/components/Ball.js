import config from "../main/config";
let { game } = config;
/*
 *	 @desc  BallObject class
 *   @param x - ball x position
 *   @param y - ball y position
 *   @param rad - ball radius
 *   @param color - ball color
 */
class BallObject {
	constructor(x, y, rad, color) {
		this.x = x;
		this.y = y;
		this.rad = rad;
		this.c = color;
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.fillStyle = this.c;
		ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.fill();

		//debug only
		//------------------------------------------------|
		if (game.debug) {
			ctx.font = "10px Arial";
			ctx.fillStyle = "white";
			ctx.fillText("xy", this.x - ctx.measureText("xy").width / 2, this.y);
			ctx.fillStyle = "red";
			ctx.fillText("x+r", this.x + this.rad, this.y);
			ctx.fillText(
				"x-r",
				this.x - this.rad - ctx.measureText("x-r").width,
				this.y
			);
			ctx.fillText(
				"y+r",
				this.x - ctx.measureText("y+r").width / 2,
				this.y + this.rad
			);
			ctx.fillText(
				"y-r",
				this.x - ctx.measureText("y-r").width / 2,
				this.y - this.rad
			);
		}
	}
}

export default BallObject;

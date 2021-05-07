import config from "../main/config";
let { brick, game } = config;

/*
 *	 @desc  BrickObject class
 *   @param x - brick x position
 *   @param y - brick y position
 *   @param width - brick width
 *   @param height - brick heigth
 *   @param density - brick density
 *   @param layerType - brick layer type array (speed boost?, slow?, Heart?, etc ...)
 */
class BrickObject {
	constructor(x, y, width, height, density, layerType) {
		this.x = x - width;
		this.y = y;
		this.w = width;
		this.h = height;
		this.d = density;
		this.type = layerType;
		this.gone = false;
	}

	draw(ctx) {
		if (!this.gone) {
			ctx.beginPath();

			//Brick shape
			ctx.rect(this.x, this.y, this.w, this.h);

			//Brick color
			ctx.fillStyle = brick.colors[this.d];
			ctx.fill();

			switch (this.type[this.d - 1]) {
				case "H":
					ctx.font = "15px Arial";
					ctx.fillStyle = brick.fontColors[this.d];
					ctx.fillText("❍", this.x + this.w / 2, this.y + this.h / 2);
					break;

				case "F":
					ctx.font = "15px Arial";
					ctx.fillStyle = brick.fontColors[this.d];
					ctx.fillText("⏩", this.x + this.w / 2, this.y + this.h / 2);
					break;

				case "S":
					ctx.font = "15px Arial";
					ctx.fillStyle = brick.fontColors[this.d];
					ctx.fillText("⏪", this.x + this.w / 2, this.y + this.h / 2);
					break;
				default:
			}

			//Brick border
			ctx.strokeStyle = "#ffffff";
			ctx.stroke();

			//debug only
			//------------------------------------------------|
			if (game.debug) {
				ctx.font = "10px Arial";
				ctx.fillStyle = "blue";
				ctx.fillText(
					`x (${this.x} ${this.y}) | hit:(${this.d}) | type(${
						this.type[this.d - 1]
					})`,
					this.x,
					this.y
				);
				ctx.fillText(`w`, this.x + this.w, this.y);
				ctx.fillText(`h`, this.x, this.y + this.h);
			}
			//--------------------------------------------------|
		}
	}

	setHit() {
		if (this.d <= 1) {
			this.gone = true;
		}
		this.d -= 1;
	}
}

export default BrickObject;

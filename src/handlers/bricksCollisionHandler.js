import config from "../main/config";
let { ball, player } = config;

/*
 *	@desc Handles whats happen when the ball object hit a brick object
 *	@param bricksArray - An array of all assigned brickObjects.
 */
const bricksCollisionHandler = (bricksArray) => {
	for (let i = 0; i <= bricksArray.length - 1; i++) {
		let checkBrick = bricksArray[i];

		if (!checkBrick.gone) {
			if (
				ball.x + ball.vx * ball.velocity + ball.rad >= checkBrick.x &&
				ball.x + ball.vx * ball.velocity - ball.rad <=
					checkBrick.x + checkBrick.w &&
				ball.y + ball.vy * ball.velocity - ball.rad <=
					checkBrick.y + checkBrick.h &&
				ball.y + ball.vy * ball.velocity + ball.rad >= checkBrick.y
			) {
				ball.vy = -ball.vy;

				//Collision Detected
				checkBrick.setHit();
				player.score += 10;
				switch (checkBrick.type[checkBrick.d]) {
					case "H": //Heart brick
						player.lives += 1;
						break;
					case "F": //Speed brick
						if (ball.velocity < 20) {
							if (ball.velocity <= 6) ball.velocity = 10;
							else ball.velocity += 2;
						}
						break;
					case "S": //Slow brick
						if (ball.velocity > 6) ball.velocity -= 2;
						break;
					default:
				}
			}
		}
	}
};

export default bricksCollisionHandler;

import config from "../main/config";
import gameLevelHandler from "./gameLevelHandler";
let { ball, paddle, window, player, game } = config;

/*
 *	@desc  Handle ball and window windowCollision
 */
const windowCollisionHandler = () => {
	//check window top edge
	if (ball.y + ball.vy * ball.velocity - ball.rad <= 0) {
		ball.vy = -ball.vy;
		//check window left and right edge
	} else if (
		ball.y + ball.vy * ball.velocity + ball.rad >= window.height &&
		!game.start
	) {
		ball.vy = -ball.vy;
	} else if (
		ball.x + ball.vx * ball.velocity + ball.rad >= window.width ||
		ball.x + ball.vx * ball.velocity - ball.rad <= 0
	) {
		ball.vx = -ball.vx;
		//check window bottom edge (Game over boundary)
	} else if (
		ball.y + ball.vy * ball.velocity + ball.rad >=
		window.height + 300
	) {
		player.lives -= 1;

		ball.x = paddle.x + paddle.width / 2;
		ball.y = paddle.y - paddle.height - ball.rad;
	}
};

export default windowCollisionHandler;

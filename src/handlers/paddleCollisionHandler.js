import config from "../main/config";
let { ball, paddle, window } = config;

/*
 *	@desc  /Handles the ball and paddle collision
 */
const paddleCollisionHandler = () => {
	let ballEdgeX = ball.x + ball.vx * ball.velocity;
	let ballEdgeY = ball.y + ball.vy * ball.velocity;

	//Check if ball reaches paddle area
	if (
		ballEdgeX + ball.rad >= paddle.x &&
		ballEdgeX - ball.rad <= paddle.x + paddle.width &&
		ballEdgeY - ball.rad <= paddle.y + paddle.height &&
		ballEdgeY + ball.rad >= paddle.y
	) {
		ball.vy = -ball.vy;

		//Check if ball hit paddle left side
		if (
			ballEdgeX + ball.rad <= paddle.x + paddle.width / 15 &&
			ballEdgeY + ball.rad > paddle.y
		) {
			ball.x = paddle.x - ball.rad;
			if (ball.x <= 0) {
				//Edge case window left
				ball.x = paddle.x + ball.rad;
				ball.y = paddle.y - ball.rad;
			}
			if (ball.vx > 0) ball.vx = -ball.vx;
		}

		//Check if ball hit paddle right side
		if (
			ballEdgeX - ball.rad > paddle.x + paddle.width - paddle.width / 15 &&
			ballEdgeY + ball.rad > paddle.y
		) {
			ball.x = paddle.x + paddle.width + ball.rad;
			if (ball.x > window.width) {
				//Edge case window right
				ball.x = paddle.x + paddle.width - ball.rad;
				ball.y = paddle.y - ball.rad;
			}
			if (ball.vx < 0) ball.vx = -ball.vx;
		}
	}
};
export default paddleCollisionHandler;

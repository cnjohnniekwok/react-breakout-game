import config from "../main/config";
import PaddleObject from "../components/Paddle";
let { ball, paddle } = config;

/*
 *	@desc  Create the Paddle
 *  @param ctx - Canvas context, for graphics rendering
 * 	@param autoPlay - <boolean> paddle auto move (play the game by itself)
 */
const Paddle = (ctx, autoPlay) => {
	let animatedPaddle = new PaddleObject(
		paddle.x,
		paddle.y,
		paddle.width,
		paddle.height,
		paddle.color
	);
	animatedPaddle.draw(ctx);

	if (autoPlay) paddle.x = ball.x - paddle.width / 2;
};

export default Paddle;

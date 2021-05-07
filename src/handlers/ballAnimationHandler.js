import config from "../main/config";
import BallObject from "../components/Ball";
let { ball } = config;

/*
 *	 @desc  Create the Ball and make it moves
 *   @param ctx - Canvas context, for graphics rendering
 */
const Ball = (ctx) => {
	let animatedBall = new BallObject(ball.x, ball.y, ball.rad, ball.color);
	animatedBall.draw(ctx);

	ball.x += ball.vx * ball.velocity;
	ball.y += ball.vy * ball.velocity;

	//Debug use only
	//-----------------------------------------------------------------------|
	//console.log(`${ball.x} ${ball.y} ${ball.velocity}`);
	//-----------------------------------------------------------------------|
};

export default Ball;

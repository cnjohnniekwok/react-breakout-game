import React from "react";
import config from "../main/config";
let { window, brick, ball, paddle, player, game } = config;

/*
 *	@desc	display game level status
 *  @param ctx - Canvas context, for graphics rendering
 */
const ScoreBoard = (ctx) => {
	let pScorce = `Score: ${player.score}`;
	let pLevel = `Level: ${player.level}`;

	let ballleft = "";
	for (var i = 0; i < player.lives; i++) {
		ballleft += "❍";
	}

	let speed = "";
	for (var j = 0; j < ball.velocity; j++) {
		speed += "➧";
	}

	ctx.font = window.font;
	ctx.fillStyle = window.fontColor;

	//Display player score
	ctx.fillText(pScorce, 20, 40);
	//Display player level
	ctx.fillText(pLevel, window.width - 20 - ctx.measureText(pLevel).width, 40);
	//Display player lives
	ctx.fillText(ballleft, 20, window.height - 30);
	//Display current speed
	if (j > 10) ctx.fillStyle = "red";
	if (j >= 20) speed += " MAX!";
	ctx.fillText(speed, 20, window.height - 50);

	//Debug use only
	//-------------------------------------------------------------------|
	if (game.debug) {
		ctx.font = "12px Arial";
		ctx.fillStyle = "red";
		ctx.fillText(
			`AutoPlay: (${game.autoPlay}) | Ball Vector: (${ball.vx},${ball.vy}) | Ball Coordinate: (${ball.x},${ball.y})  | Ball Velocity: (${ball.velocity}) | Paddle Width: (${paddle.width}) | Level Max Density: (${brick.density})`,
			300,
			window.height - 10
		);

		ctx.fillStyle = "blue";
		ctx.fillText(
			`Speed:[ + ],[ - ] | AutoPlay:[U] | Call back ball:[C] `,
			300,
			window.height - 30
		);
	}
	//-------------------------------------------------------------------|
	return <div></div>;
};

export default ScoreBoard;

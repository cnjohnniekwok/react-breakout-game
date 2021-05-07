import React from "react";
import initGame from "../handlers/gameInitializeHandler";
import useKeypress from "../util/useKeypress";
import config from "../main/config";
let { ball, paddle, controls, game } = config;

/*
 *	@desc  Listen to keyboard input to toggle debug and autoPlay mode
 */
const KeyboardControl = () => {
	useKeypress(controls.toggleDebug, () => {
		//toggle debug mode
		game.debug = !game.debug;
	});

	useKeypress(controls.toggleAutoPlay, () => {
		//toggle autoPlay mode
		controls.mouseControl = !controls.mouseControl;
		game.autoPlay = !game.autoPlay;
	});

	useKeypress(controls.incBallSpeed, () => {
		//increase ball speed
		if (ball.velocity < 20) ball.velocity++;
	});

	useKeypress(controls.decBallSpeed, () => {
		//decrease ball speed
		if (ball.velocity > 0) ball.velocity--;
	});

	useKeypress(controls.callBackLostBall, () => {
		//somehow the ball will break the window, call it back for purpose
		ball.x = paddle.x + paddle.width / 2;
		ball.y = paddle.y - paddle.height;
	});

	useKeypress(controls.gameStart, () => {
		//somehow the ball will break the window, call it back for purpose
		initGame();
	});

	useKeypress(controls.togglePanicMode, () => {
		//somehow the ball will break the window, call it back for purpose
		game.panicMode = !game.panicMode;
	});

	//React component for injection
	return <div onKeyPress={useKeypress} />;
};

export default KeyboardControl;

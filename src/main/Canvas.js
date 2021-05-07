import React, { useEffect, useRef } from "react";
import "../App.css";
import Ball from "../handlers/ballAnimationHandler";
import windowCollisionHandler from "../handlers/windowCollisionHandler";
import Paddle from "../handlers/paddleAnimationHandler";
import paddleCollisionHandler from "../handlers/paddleCollisionHandler";
import mouseControl from "../handlers/mouseControlHandler";
import KeyboardControl from "../handlers/keyBoardControlHandler";
import gameLevelHandler from "../handlers/gameLevelHandler";
import brickCollisionHandler from "../handlers/bricksCollisionHandler";
import ScoreBoard from "../components/ScoreBoard";
import config from "./config";
let { window, game } = config;

const Canvas = () => {
	const canvasRef = useRef(null);
	useEffect(() => {
		const drawFrame = () => {
			//Define the canvas
			//-----------------------------------------------------------|
			let mainCanvas = canvasRef.current;
			let ctx = mainCanvas.getContext("2d");

			//Clear canvas for new frame
			//-----------------------------------------------------------|
			ctx.clearRect(0, 0, window.width, window.height);

			//Define canvas elements
			//-----------------------------------------------------------|
			//Draw ScoreBoard
			ScoreBoard(ctx);

			//Draw Ball
			Ball(ctx);

			//Draw Paddle autoPlay: true - for debug only
			Paddle(ctx, game.autoPlay);

			//Draw Bricks -- Game play level inside as well
			let brickArray = gameLevelHandler(ctx);

			//Elements interactions
			//-----------------------------------------------------------|
			//Wall boundary check TODO: Fix ball some how breakthrought window?!
			windowCollisionHandler();
			//Paddle boundary check
			paddleCollisionHandler();
			//Brick boundary check
			brickCollisionHandler(brickArray);

			//Draw a canvas frame
			//-----------------------------------------------------------|
			requestAnimationFrame(drawFrame);
		};
		drawFrame();
	}, []);

	return (
		<>
			<canvas
				id="mainCanvas"
				className="canvas-css"
				width={window.width}
				height={window.height}
				onMouseMove={mouseControl}
				ref={canvasRef}
			/>
			<KeyboardControl />
		</>
	);
};

export default Canvas;

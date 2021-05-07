import BricksArray from "../handlers/bricksCreationHandler";
import config from "../main/config";
import display from "../util/display";
let { game, window, player, ball, brick, paddle } = config;

//Empty Bricks Array
let bricksArray = [];
/*
 *	@desc  Create/Generate game level elements, checks for end game, handle level transitions
 *	@param ctx - Canvas context, for graphics rendering
 */
const gameLevelHandler = (ctx) => {
	if (!game.start) {
		bricksArray = [];
		let startMsg = "Let's play!";
		let startInst =
			"Game Controls: Use Mouse to Control | Press [ I ] to start game!";
		let notes =
			"Brick Types: [❍] Lives ++ | [⏩] Speed boost | [⏪] Slow down ";
		let panicInst = "PANIC MODE:  Press >>>[P]<<< before start ";
		//Press I will start the game

		display(ctx, window.font, window.fontColor, startMsg, window.height / 2);
		display(ctx, "18px Arial", "blue", notes, window.height / 2 + 30);
		display(ctx, "18px Arial", "blue", startInst, window.height / 2 + 60);
		display(ctx, "18px Arial", "red", panicInst, window.height / 2 + 105);
	} else {
		let brickGone = 0;
		for (var i = 0; i <= bricksArray.length - 1; i++) {
			let eachBrick = bricksArray[i];

			//Prevent player level 0
			if (player.level === 0) brickGone = bricksArray.length;

			//Count bricks being hit
			if (eachBrick.gone) brickGone++;

			//No more lives?
			if (player.lives <= 0) break;

			//Level up!
			if (brickGone === bricksArray.length) break;

			//Draw bricks
			eachBrick.draw(ctx);

			//Make them move! ... or not?
			if (game.panicMode) {
				eachBrick.y += brick.dy;
				eachBrick.x += brick.dx;
				if (eachBrick.y >= window.height / 2) brick.dy = -brick.dy;
				if (eachBrick.y <= brick.y_offset) brick.dy = -brick.dy;
				if (eachBrick.x + eachBrick.w >= window.width) brick.dx = -brick.dx;
				if (eachBrick.x <= 0) brick.dx = -brick.dx;
			}
		}

		//Handles new level or end game
		if (brickGone === bricksArray.length || player.lives <= 0) {
			//Set initial ball position
			ball.x = paddle.x + paddle.width / 2;
			ball.y = paddle.y - paddle.height - ball.rad;

			// Exhausted all lives and LOSE.
			if (player.lives <= 0) {
				game.over = true;

				let loseMsg = `You've drop all the balls... D: You scored (${player.score})!`;
				let loseInst = `Press [I] to start again!`;
				//Press I will initialize the game => gameInitializeHandler

				display(ctx, window.font, window.fontColor, loseMsg, window.height / 2);
				display(ctx, "18px Arial", "blue", loseInst, window.height / 2 + 30);
			}

			// Reaches the highest level and WON.
			else if (player.level === game.maxLevels) {
				game.over = true;

				let winMsg = `OK, you win :) You scored (${player.score})!`;
				let winInst = `Press [I] to start again! | [U] to auto play | [D] for debug mode`;
				//Press I will initialize the game => gameInitializeHandler

				display(ctx, window.font, window.fontColor, winMsg, window.height / 2);
				display(ctx, "18px Arial", "blue", winInst, window.height / 2 + 30);
			}

			// Generate new level
			else if (!game.over) {
				//Increment player's level
				player.level += 1;

				//Density will increase after level 3
				if (brick.density < brick.maxDensity) brick.density += 1;

				//Paddle width will decrease after level 5
				if (player.level > 5) {
					if (paddle.width > 100) paddle.width -= 30;
				}

				//Calculate bricks array side based on player's current level
				brick.numBricks = player.level + 1;
				brick.numRows = player.level >= 3 ? player.level - 1 : 2;

				//Create new level bricks array
				bricksArray = BricksArray(brick.numBricks, brick.numRows);
			}
		}
	}

	//Outup for collision handling
	return bricksArray;
};

export default gameLevelHandler;

import config from "../main/config";
let { ball, brick, paddle, player, game } = config;

//	@desc  Initialize or reset the game
const gameInitializeHandler = () => {
	//Start Game!
	game.start = true;
	//set initial ball position
	ball.x = paddle.x + paddle.width / 2;
	ball.y = paddle.y - paddle.height;

	//set initial game configurations
	//Player
	//------------------------------------------|
	player.score = 0;
	player.level = 0;
	player.lives = 5;
	//Birck
	//------------------------------------------|
	brick.density = 0;
	brick.numBricks = 3;
	brick.numRows = 1;
	//ball
	//------------------------------------------|
	ball.velocity = 6;
	//Paddle
	//------------------------------------------|
	paddle.width = 200;
	//Game
	//------------------------------------------|
	game.over = false;
};

export default gameInitializeHandler;

const config = {
	window: {
		width: 1000,
		height: 800,
		color: "#DEEFF5",
		font: "25px Arial",
		fontColor: "#000000",
	},

	game: {
		autoPlay: false,
		debug: false,
		pause: true,
		over: false,
		start: false,
		panicMode: false,
		maxLevels: 10,
	},

	player: {
		lives: 5 /* Overide by initGame */,
		level: 1 /* Overide by initGame */,
		score: 0,
	},

	controls: {
		toggleAutoPlay: "u",
		toggleDebug: "d",
		togglePanicMode: "p",
		incBallSpeed: "+",
		decBallSpeed: "-",
		callBackLostBall: "c",
		gameStart: "i",
		mouseControl: true,
	},

	ball: {
		x: 300,
		y: 500,
		vx: 1,
		vy: 1,
		rad: 15,
		velocity: 6 /* Overide by initGame */,
		color: "#393e46",
	},

	paddle: {
		x: 400,
		y: 700,
		vx: 35,
		vy: 35,
		width: 200,
		height: 20,
		velocity: 10,
		color: "#393e46",
	},

	brick: {
		x_offset: 50,
		y_offset: 60,
		dy: 1,
		dx: 1,
		height: 25,
		padding: 8,
		numBricks: 3,
		numRows: 1,
		minDensity: 1,
		maxDensity: 6,
		density: 1 /* Overide by initGame */,
		fontColors: [
			"#445AC0",
			"#457EC4",
			"#296BBB",
			"#0E58B3",
			"#7ED3BD",
			"#76C6B2",
		],
		colors: ["#BEDFEC", "#7DBFD9", "#5CAFCF", "#3C9FC6", "#187BA2", "#146687"],
	},
};

export default config;

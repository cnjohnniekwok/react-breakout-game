import config from "../main/config";
let { paddle, window, controls } = config;

/*
 *	@desc  Calculate mouse location and map it to paddle movent
 */
const mouseControl = (e) => {
	if (controls.mouseControl) {
		paddle.x = e.clientX - paddle.width / 2;
		if (paddle.x + paddle.width + paddle.vx > window.width)
			paddle.x = window.width - paddle.width;
		if (paddle.x - paddle.vx < 0) paddle.x = 0;
	}
};

export default mouseControl;

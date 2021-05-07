import config from "../main/config";
import BrickObject from "../components/Brick";
import randomBrickType from "./randomBrickTypesHandler";
let { brick, window } = config;

/*
 *	@desc  Create an array of bricks
 *  @param numBricks - the number of brciks per row
 * 	@param numRows - number of brick rows
 *	@return an Array of fully defined bricksObjects
 */
const BricksArray = (numBricks, numRows) => {
	//Brick width calculate by window size
	brick.width = Math.floor(
		(window.width - brick.x_offset * 2 - brick.padding * numBricks) / numBricks
	);
	let bricksArray = [];
	let bricksIniPlacementX = brick.x_offset + brick.width;
	let bricksIniPlacementY = brick.y_offset;

	let mindensity = brick.minDensity;
	if (brick.density < 1) brick.density = 1;

	for (let i = 0; i < numRows; i++) {
		for (let j = 0; j < numBricks; j++) {
			//Generate random num for brick layer
			let randDensity = Math.floor(
				Math.random() * (brick.density - mindensity) + mindensity
			);

			//Create a brick
			let newBrick = new BrickObject(
				bricksIniPlacementX + (brick.width + brick.padding) * j,
				bricksIniPlacementY + (brick.height + brick.padding) * i,
				brick.width,
				brick.height,
				randDensity,
				randomBrickType(randDensity)
			);
			bricksArray.push(newBrick);
		}
	}

	return bricksArray;
};

export default BricksArray;

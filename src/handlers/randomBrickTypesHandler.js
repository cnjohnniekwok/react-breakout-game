import config from "../main/config";
let { brick } = config;

/*
 *	@desc  generated ranged random number
 *	@param min <int>
 *	@param max <int>
 */
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

/*
 *		@desc  assign brick types to brickObjects.types array
 *   @param randDensity - randomly generated layer <int> that a brcik will contains
 */
const randomBrickType = (randDensity) => {
	// fill all brick layers as Normal brick
	let brickLayerType = new Array(randDensity).fill("N");
	let oneOverFiveChance = getRandomInt(1, 11);

	//debug use only:
	//----------------------------------------------------------------------------|
	//console.log(`1/5 -: ${oneOverFiveChance} layer:${getRandomInt(0, randDensity)} rand:${randDensity}`)
	if (brick.density >= 2) {
		switch (oneOverFiveChance) {
			case 1:
				// +1 Health brick
				brickLayerType[getRandomInt(0, randDensity)] = "H";
				break;
			case 2:
				// +2 ball speed
				brickLayerType[getRandomInt(0, randDensity)] = "F";
				break;
			case 3:
				// -2 ball speed
				brickLayerType[getRandomInt(0, randDensity)] = "S";
				break;
			default:
			// code block
		}
	}

	return brickLayerType;
};

export default randomBrickType;

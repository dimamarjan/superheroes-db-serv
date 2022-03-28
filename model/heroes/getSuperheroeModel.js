const Heroes = require('../../schemas/heroes');
const { NOT_FOUND } = require('../../common/constants/httpCodes');

const getSuperheroeModel = async (heroId) => {
	try {
		const superheroesData = await Heroes.findOne({ id: heroId });
		return superheroesData;
	} catch {
		throw new Error(NOT_FOUND);
	}
};

module.exports = getSuperheroeModel;

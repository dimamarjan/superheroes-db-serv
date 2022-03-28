const Heroes = require('../../schemas/heroes');
const { NOT_FOUND } = require('../../common/constants/httpCodes');

const getSuperheroesModel = async () => {
	try {
		const superheroesData = await Heroes.find();
		return superheroesData;
	} catch {
		throw new Error(NOT_FOUND);
	}
};

module.exports = getSuperheroesModel;

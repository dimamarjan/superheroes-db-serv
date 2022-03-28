const Heroes = require('../../schemas/heroes');
const { s3deelete } = require('../../common/s3/s3');
const { NOT_FOUND } = require('../../common/constants/httpCodes');

const delSuperheroesModel = async (superheroId) => {
	try {
		const superhero = await Heroes.findOne({ id: superheroId });
		if (superhero.images.length) {
			superhero.images.forEach((image) => {
				s3deelete(image.split('/')[3]);
			});
		}
		return await Heroes.deleteOne({ id: superheroId });
	} catch {
		throw new Error(NOT_FOUND);
	}
};

module.exports = delSuperheroesModel;

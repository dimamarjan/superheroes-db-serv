const { v4: uuidv4 } = require('uuid');
const Heroes = require('../../schemas/heroes');
const { s3upload } = require('../../common/s3/s3');
const { NOT_FOUND } = require('../../common/constants/httpCodes');

const addSuperheroesModel = async (newHero, imageFiles) => {
	try {
		newHero.id = uuidv4();
		if (imageFiles.length) {
			const newUrlList = await Promise.all(
				imageFiles.map(async (image) => {
					const imgUrl = await s3upload(image);
					return imgUrl.Location;
				})
			);
			return await Heroes.create({ ...newHero, images: newUrlList });
		}
		return await Heroes.create({ ...newHero, images: [] });
	} catch {
		throw new Error(NOT_FOUND);
	}
};

module.exports = addSuperheroesModel;

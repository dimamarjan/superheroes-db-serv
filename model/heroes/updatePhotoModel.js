const Heroes = require('../../schemas/heroes');
const { s3upload, s3deelete } = require('../../common/s3/s3');
const { NOT_FOUND } = require('../../common/constants/httpCodes');

const updatePhotoModel = async (heroe, imageFile) => {
	try {
		const superheroe = await Heroes.findOne({ id: heroe.id });
		const oldImageIndex = superheroe.images.indexOf(heroe.old_image);
		s3deelete(heroe.old_image.split('/')[3]);
		const newimgUrl = await Promise.all(
			imageFile.map(async (image) => {
				const imgUrl = await s3upload(image);
				return imgUrl.Location;
			})
		);
		superheroe.images[oldImageIndex] = newimgUrl[0];
		return await Heroes.updateOne({ id: heroe.id }, superheroe);
	} catch (e) {
		console.log(e);
		throw new Error(NOT_FOUND);
	}
};

module.exports = updatePhotoModel;

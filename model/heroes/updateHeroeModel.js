const Heroes = require('../../schemas/heroes');
const { NOT_FOUND } = require('../../common/constants/httpCodes');

const updateSuperheroesModel = async (updatedHeroe) => {
	try {
		console.log(updatedHeroe.id);
		const {
			nickname,
			real_name,
			origin_description,
			superpowers,
			catch_phrase,
		} = updatedHeroe;

		return await Heroes.findOneAndUpdate(
			{ id: updatedHeroe.id },
			{
				nickname,
				real_name,
				origin_description,
				superpowers,
				catch_phrase,
			}
		);
	} catch (e) {
		console.log(e);
		throw new Error(NOT_FOUND);
	}
};

module.exports = updateSuperheroesModel;

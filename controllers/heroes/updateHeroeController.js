const { updateSuperheroesModel } = require('../../model');
const { ACCEPTED } = require('../../common/constants/httpCodes');

const updateHeroeController = async (req, res, next) => {
	try {
		const data = await updateSuperheroesModel(req.body);
		return res.json({
			status: 'succsess',
			code: ACCEPTED,
			data,
		});
	} catch (err) {
		next(err);
	}
};

module.exports = updateHeroeController;

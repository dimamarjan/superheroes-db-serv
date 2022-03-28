const { addSuperheroesModel } = require('../../model');
const { CREATED } = require('../../common/constants/httpCodes');

const addHeroesController = async (req, res, next) => {
	try {
		const data = await addSuperheroesModel(req.body, req.files);
		return res.json({
			status: 'succsess',
			code: CREATED,
			data,
		});
	} catch (err) {
		next(err);
	}
};

module.exports = addHeroesController;

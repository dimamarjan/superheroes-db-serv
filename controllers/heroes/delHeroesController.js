const { delSuperheroesModel } = require('../../model');
const { NO_CONTENT } = require('../../common/constants/httpCodes');

const delHeroesController = async (req, res, next) => {
	try {
		const data = await delSuperheroesModel(req.params.id);
		if (data.acknowledged) {
			return res.json({
				status: 'succsess',
				code: NO_CONTENT,
			});
		}
	} catch (err) {
		next(err);
	}
};

module.exports = delHeroesController;

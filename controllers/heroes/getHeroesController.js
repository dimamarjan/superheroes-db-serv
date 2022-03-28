const { getHeroesModel } = require('../../model');
const { OK } = require('../../common/constants/httpCodes');

const getHeroesController = async (_, res, next) => {
	try {
		const data = await getHeroesModel();
		return res.json({
			status: 'succsess',
			code: OK,
			data,
		});
	} catch (err) {
		next(err);
	}
};

module.exports = getHeroesController;

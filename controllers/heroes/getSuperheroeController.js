const { getSuperheroeModel } = require('../../model');
const { OK } = require('../../common/constants/httpCodes');

const getSuperheroeController = async (req, res, next) => {
	try {
		const data = await getSuperheroeModel(req.params.id);
		return res.json({
			status: 'succsess',
			code: OK,
			data,
		});
	} catch (err) {
		next(err);
	}
};

module.exports = getSuperheroeController;

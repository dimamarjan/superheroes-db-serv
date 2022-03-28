const { updatePhotoModel } = require('../../model');
const { ACCEPTED } = require('../../common/constants/httpCodes');

const updatePhotoCoontroller = async (req, res, next) => {
	try {
		const data = await updatePhotoModel(req.body, req.files);
		return res.json({
			status: 'succsess',
			code: ACCEPTED,
			data,
		});
	} catch {
		next(err);
	}
};

module.exports = updatePhotoCoontroller;

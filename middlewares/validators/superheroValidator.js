const Joi = require('joi');

const validator = async (req, res, next) => {
	try {
		const validatorTextData = Joi.object({
			nickname: Joi.string().min(3).required(),
			real_name: Joi.string().min(3).required(),
			origin_description: Joi.string().required(),
			superpowers: Joi.string().required(),
			catch_phrase: Joi.string().required(),
		});
		const validatorImgData = Joi.array()
			.min(1)
			.items(
				Joi.object({
					fieldname: Joi.string(),
					originalname: Joi.string(),
					encoding: Joi.string(),
					mimetype: Joi.string().equal('image/jpeg'),
					buffer: Joi.any(),
					size: Joi.number().max(2000000),
				})
			)
			.required();
		const body = validatorTextData.validate(req.body);
		const files = validatorImgData.validate(req.files);
		if (body.error) {
			next(body.error);
		}
		if (files.error) {
			next(files.error);
		}
		next();
	} catch (err) {
		next(err);
	}
};

module.exports = validator;
